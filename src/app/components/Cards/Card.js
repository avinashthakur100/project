import React from "react";

const Card = ({ data, type }) => {
  return (
    <>
      {type === "capsule" && (
        <div className="bg-gray-900 text-white rounded-lg p-6 border border-gray-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">{data.capsule_serial}</h3>
          <p className="mb-2"><span className="font-medium">Type:</span> {data.type}</p>
          <p className="mb-2"><span className="font-medium">Status:</span> {data.status}</p>
          <p className="mb-2"><span className="font-medium">Launch Date:</span> {new Date(data.original_launch).toLocaleDateString()}</p>
          <p className="mb-2">
            <span className="font-medium">Missions:</span>{" "}
            {data.missions.length > 0
              ? data.missions.map((m) => m.name).join(", ")
              : "No missions"}
          </p>
          <p className="mb-2"><span className="font-medium">Landings:</span> {data.landings}</p>
          <p className="mb-2"><span className="font-medium">Reuses:</span> {data.reuse_count}</p>
          <p className="italic">{data.details}</p>
        </div>
      )}

      {type === "launch" && (
        <div className="bg-gray-900 text-white rounded-lg p-6 border border-gray-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">{data.mission_name}</h3>
          <p className="mb-2"><span className="font-medium">Rocket:</span> {data.rocket.rocket_name}</p>
          <p className="mb-2"><span className="font-medium">Launch Date:</span> {new Date(data.launch_date_utc).toLocaleDateString()}</p>
          <p className="mb-2"><span className="font-medium">Launch Site:</span> {data.launch_site.site_name}</p>
          <p className="italic">{data.details || "No details available."}</p>
        </div>
      )}

      {type === "history" && (
        <div className="bg-gray-900 text-white rounded-lg p-6 border border-gray-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
          <p className="mb-2"><span className="font-medium">Date:</span> {new Date(data.event_date_utc).toLocaleString()}</p>
          <p className="mb-2">{data.details}</p>
          {data.links?.article && (
            <a
              href={data.links.article}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline inline-block mt-2"
            >
              Read More
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default Card;
