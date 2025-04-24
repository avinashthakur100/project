"use client";
import React from "react";
import useFetch from "../Hook/usefetch";
import Table from "../components/Cards/Table";


const CapsulePage = () => {
  const { data } = useFetch("capsules");

  const cols = [
    { title: "Capsule Serial", render: (item) => item.capsule_serial },
    { title: "Capsule ID", render: (item) => item.capsule_id },
    { title: "Status", render: (item) => item.status },
    { title: "Original Launch", render: (item) => item.original_launch },
    { title: "Launch Unix", render: (item) => item.original_launch_unix },
    {
      title: "Mission Name",
      render: (item) => item.missions?.[0]?.name ?? "avinash",
    },
    {
      title: "Flight",
      render: (item) => item.missions?.[0]?.flight ?? "-",
    },
  ];

  return (
    <div className=" min-h-screen">
      <Table cols={cols} data={data} />
    </div>
  );
};

export default CapsulePage;
