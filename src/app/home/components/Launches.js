"use client";
import React,{useRef ,useState,useCallback} from "react";
import useFetch from "../../Hook/usefetch";
import useAutoHoverScroll from "@/app/Hook/useAutoScroll";
import useInfiniteScroll from "@/app/Hook/useInfiniteScroll";
import Card from "@/app/components/Cards/Card";

const Launches = () => {

  const { data, error, loading } = useFetch("launches");
  const [visibleCount, setVisibleCount] = useState(10);

  const scrollRef = useRef(); 
  const loadMoreRef = useRef();


  useAutoHoverScroll(scrollRef, {
    scrollSpeed: 2,
    scrollZoneHeight: 100,
    intervalDelay: 10,
    trigger: data, 
  });


  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + 10, data.length));
  }, [data.length]);

  useInfiniteScroll(loadMoreRef, loadMore);
 

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-white mb-8">
        Launches
      </h2>

      <div
        ref={scrollRef}
        className="flex flex-col gap-6"
        style={{
          height: "550px",
          padding: "10px",
          overflowY: "hidden",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        {data.slice(0, visibleCount).map((launch) => (
          <Card
          key={`history-${launch.mission_name}`}
          data={launch}
          type="launch"
        />
        ))}
        
        <div ref={loadMoreRef} style={{ height: "1px" }} />
      </div>
    </div>
  );
};

export default Launches;
