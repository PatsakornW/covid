import React from "react";

const Tab = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-end m-5">
      <button
        className={`${
          activeTab === "chart" ? "bg-blue-500 text-white" : "bg-gray-300"
        } px-4 py-2 rounded-l focus:outline-none`}
        onClick={() => setActiveTab("chart")}
      >
        Chart
      </button>
      <button
        className={`${
          activeTab === "table" ? "bg-blue-500 text-white" : "bg-gray-300"
        } px-4 py-2 rounded-r focus:outline-none`}
        onClick={() => setActiveTab("table")}
      >
        Table
      </button>
    </div>
  );
};

export default Tab;
