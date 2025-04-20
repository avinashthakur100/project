"use client";
import React, { useRef } from "react";
import useFetch from "../../Hook/usefetch";
import HistoryCard from "@/app/components/Cards/History";
import useAutoHoverScroll from "@/app/Hook/useAutoScroll";

const History = () => {
  const { data, error, loading } = useFetch("history");
  const scrollRef = useRef();

  useAutoHoverScroll(scrollRef, {
    scrollSpeed: 2,
    scrollZoneHeight: 100,
    intervalDelay: 10,
    trigger: data, 
  });

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-white mb-8">
        History
      </h2>
      <div
        ref={scrollRef}
        className="flex flex-col gap-6"
        style={{
          height: "570px",
          padding: "10px",
          overflowY: "hidden",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        {data.map((item) => (
          <HistoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default History;
