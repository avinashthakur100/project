"use client";
import React, { useState } from "react";
import useFetch from "../Hook/usefetch";
import Pagination from "../components/Cards/Pagination";
import Table from "../components/Cards/Table";


const page = () => {
  const { data, error, loading } = useFetch("launches");
  const [currentLaunches, setCurrentLaunches] = useState([]);

  const launchesPerPage = 6;

  const cols = [
    { title: "Mission Name", render: (item) => item.mission_name },
    { title: "Launch Year", render: (item) => item.launch_year },
    { title: "Rocket Name", render: (item) => item.rocket.rocket_name },
    {
      title: "Payload Name",
      render: (item) => item.rocket.second_stage.payloads[0]?.payload_id,
    },
    {
      title: "Payload Type",
      render: (item) => item.rocket.second_stage.payloads[0]?.payload_type,
    },
    {
      title: "Orbit",
      render: (item) => item.rocket.second_stage.payloads[0]?.orbit,
    },
    {
      title: "Launch Site",
      render: (item) => item.launch_site.site_name_long,
    },
    {
      title: "Mission Patch",
      render: (item) => (
        <img
          src={item.links.mission_patch}
          alt="patch"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
      ),
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div style={{ paddingBottom: "120px" }}>
      <Table cols={cols} data={currentLaunches} />
      <div
        style={{
          position: "fixed",
          bottom: 40,
          width: "100%",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <Pagination
          data={data}
          itemsPerPage={launchesPerPage}
          onPageChange={setCurrentLaunches}
        />
      </div>
    </div>
  );
};

export default page;
