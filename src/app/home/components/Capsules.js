"use client";
import React, { useRef, useEffect, useState } from "react";
import useFetch from "../../Hook/usefetch";
import useAutoHoverScroll from "@/app/Hook/useAutoScroll";
import Card from "@/app/components/Cards/Card";

const Capsules = () => {
  const { data, error, loading } = useFetch("capsules");
  const scrollRef = useRef(null);

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
        Capsules
      </h2>

      <div
        ref={scrollRef}
        style={{
          height: "550px",
          padding: "10px",
          overflowY: "hidden",
          borderRadius: "8px",
          position: "relative",
          color: "white",
        }}
        className="flex flex-col gap-6 "
      >
        {data.map((item) => (
          // <CapsuleCard key={item.capsule_serial} item={item} />
          <Card
            key={`capsule-${item.capsule_serial}`}
            data={item}
            type="capsule"
          />
        ))}
      </div>
    </div>
  );
};

export default Capsules;
