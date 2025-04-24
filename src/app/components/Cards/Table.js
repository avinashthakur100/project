"use client";
import React from "react";

const Table = ({ cols, data }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-700 text-sm text-white bg-gray-900 rounded-lg shadow-lg">
        <thead className="bg-gray-800 text-gray-300">
          <tr>
            {cols.map((headerItem, index) => (
              <th
                key={index}
                className="px-6 py-3 border-b border-gray-600 text-left font-semibold"
              >
                {headerItem.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="odd:bg-gray-800 even:bg-gray-900 hover:bg-gray-700 transition duration-200"
            >
              {cols.map((col, key) => (
                <td key={key} className="px-6 py-4 border-b border-gray-700">
                  {col.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
