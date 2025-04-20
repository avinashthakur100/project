import React from "react";

const HistoryCard = ({ item }) => {
  return (
    <div className="bg-gray-900 shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out">
      <h3 className="text-2xl font-bold text-white mb-3">
        {item.title}
      </h3>

      <p className="text-gray-300 mb-2">
        <span className="font-semibold text-white">Date:</span> {item.event_date_utc}
      </p>

      <p className="text-gray-300 mb-2">
        <span className="font-semibold text-white">Flight Number:</span> {item.flight_number}
      </p>

      <p className="text-white italic mt-4">{item.details}</p>
    </div>
  );
};

export default HistoryCard;
