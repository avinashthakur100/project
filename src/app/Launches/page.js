"use client";
import React from "react";
import useFetch from "../Hook/usefetch";
import Pagination from "../components/Cards/Pagination";
import { useState } from "react";

const page = () => {
  const { data, error, loading } = useFetch("launches");
  const [currentLaunches, setCurrentLaunches] = useState([]);

  const launchesPerPage = 6;
  console.log(data);
  return (
    <div>
      <table className=" w-[1300px] bg-blue-100 my-8 border mx-30">
        <thead>
          <tr>
            <th className="text-center border px-4 py-2">Mission Name</th>
            <th className="text-center border px-4 py-2">Launch Year</th>
            <th className="text-center border px-4 py-2">Rocket Name</th>
            <th className="text-center border px-4 py-2">Payload Name</th>
            <th className="text-center border px-4 py-2">Payload Type</th>
            <th className="text-center border px-4 py-2">Orbit</th>
            <th className="text-center border px-4 py-2">Launch Site</th>
            <th className="text-center border px-4 py-2">Mission Patch</th>
          </tr>
        </thead>
        <tbody>
          {currentLaunches.map((item) => (
            <tr key={item.mission_name}>
              <td className="text-center border">{item.mission_name}</td>
              <td className="text-center border">{item.launch_year}</td>
              <td className="text-center border">{item.rocket.rocket_name}</td>
              <td className="text-center border">
                {item.rocket.second_stage.payloads[0].payload_id}
              </td>
              <td className="text-center border">
                {item.rocket.second_stage.payloads[0].payload_type}
              </td>
              <td className="text-center border">
                {item.rocket.second_stage.payloads[0].orbit}
              </td>
              <td className="text-center border">
                {item.launch_site.site_name_long}
              </td>
              <td className="text-center border">
                <img
                  src={item.links.mission_patch}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          position: "fixed",
          bottom: 40,
          width: "100%",
          backgroundColor: "white", // optional
          padding: "10px",
        }}
      >
        <Pagination
          style={{}}
          data={data}
          itemsPerPage={launchesPerPage}
          onPageChange={setCurrentLaunches}
        />
      </div>
    </div>
  );
};

export default page;
