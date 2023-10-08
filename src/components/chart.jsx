import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Chart = ({
  cases,
  deaths,
  recovered,
  filteredCases,
  filteredDeaths,
  filteredRecovered,
}) => {
  const Chartdata = (data) => {
    return {
      labels: filteredCases.map((index, value) => filteredCases[value]),
      datasets: [
        {
          label: "Cases",
          data: data,
          borderColor: "rgba(220, 38,38, 1)",
          fill: false,
        },
        {
          label: "Deaths",
          data: filteredDeaths.map((index) => deaths[index]),
          borderColor: "rgba(22, 163,74, 1)",
          fill: false,
        },
        {
          label: "Recovered",
          data: filteredRecovered.map((index) => recovered[index]),
          borderColor: "rgba(75, 85,99, 1)",
          fill: true,
        },
      ],
    };
  };

  return (
    <div>
      {filteredCases && (
        <Line
          data={Chartdata(filteredCases.map((index) => cases[index]))}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              title: {
                display: true,
                text: "Covid-19",
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Date",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Total",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
