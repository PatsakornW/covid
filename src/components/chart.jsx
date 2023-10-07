import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Chart = () => {
  const location = useLocation();
  const dateData = location.state?.dateData || null;
  const [cases, setCases] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [filteredCases, setFilteredCases] = useState(null);
  const [filteredDeaths, setFilteredDeaths] = useState(null);
  const [filteredRecovered, setFilteredRecovered] = useState(null);
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {
        setCases(response.data.cases);
        setDeaths(response.data.deaths);
        setRecovered(response.data.recovered);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dateData]);

  useEffect(() => {
    if (cases && deaths && recovered) {
      const filteredCasesData = filterDataByDate(cases, dateData);
      const filteredDeathsData = filterDataByDate(deaths, dateData);
      const filteredRecoveredData = filterDataByDate(recovered, dateData);
      
      setFilteredCases(filteredCasesData);
      setFilteredDeaths(filteredDeathsData);
      setFilteredRecovered(filteredRecoveredData);
    }
  }, [dateData, cases, deaths, recovered]);

  const filterDataByDate = (data, targetDate) => {
    return Object.keys(data).filter((index) => dateData === convertDate(index));
  };

  const convertDate = (index) => {
    const [month, day, year] = index.split("/");
    return `${month} ${year}`;
  };

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
            plugins: {
              title: {
                display: true,
                text: "Chart.js Line Chart",
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
