"use client";
import React from "react";
import useFetch from "../Hook/usefetch";

const page = () => {
  const { data, error, loading } = useFetch("capsules");
  console.log(data);

  return (
    <div className="bg-black h-screen w-screen mx-0">
      <table className=" w-[1300px] bg-blue-100 border-collapse mx-30">
        <thead>
          <tr>
            <th className="text-center border "></th>
            <th className="text-center border"></th>
            <th className="text-center border"></th>
            <th className="text-center border"></th>
            <th className="text-center border"></th>
            <th colSpan="2" className="text-center border">
              Mission
            </th>
          </tr>
          <tr>
            <th className="text-center border">Capsule Serial</th>
            <th className="text-center border">Capsule ID</th>
            <th className="text-center border">Status</th>
            <th className="text-center border">Original Launch</th>
            <th className="text-center border">Launch Unix</th>
            <th className="text-center border">Name</th>
            <th className="text-center border">Flight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.capsule_serial}>
              <td className="text-center border">{item.capsule_serial}</td>
              <td className="text-center border">{item.capsule_id}</td>
              <td className="text-center border">{item.status}</td>
              <td className="text-center border">{item.original_launch}</td>
              <td className="text-center border">{item.original_launch_unix}</td>
              <td className="text-center border">{ item.missions[0]?.name ?? 'avinash'}</td>
              <td className="text-center border">{ item.missions[0]?.flight}</td>
              {/* {console.log(item.missions[0].name) && null} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
