import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";

const Historical = () => {
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
    if (cases) {
      const filteredCasesData = Object.keys(cases).filter((index) => {
        return dateData === convertDate(index);
      });

      setFilteredCases(filteredCasesData);
    }
  }, [dateData, cases]);

  useEffect(() => {
    if (deaths) {
      const filteredDeathsData = Object.keys(deaths).filter((index) => {
        return dateData === convertDate(index);
      });

      setFilteredDeaths(filteredDeathsData);
    }
  }, [dateData, deaths]);

  useEffect(() => {
    if (recovered) {
      const filteredRecoveredData = Object.keys(recovered).filter((index) => {
        return dateData === convertDate(index);
      });

      setFilteredRecovered(filteredRecoveredData);
    }
  }, [dateData, recovered]);

  const convertDate = (index) => {
    const [month, day, year] = index.split("/");
    return `${month} ${year}`;
  };

  const prepareChartData = (data, labels) => {
    return {
      labels: labels,
      datasets: [
        {
          label: "Total Cases",
          data: data,
          borderColor: "rgba(75, 192, 192, 1)",
          fill: false,
        },
      ],
    };
  };

  return (
    <div>
      <p>{dateData}</p>
      <h2>Cases Data:</h2>
      {filteredCases && (
        <Line
          data={prepareChartData(
            filteredCases.map((index) => cases[index]),
            filteredCases.map((index, value) => filteredCases[value])
          )}
          options={{
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
                  text: "Cases",
                },
              },
            },
          }}
        />
      )}

      <h2>Deaths Data:</h2>
      <ul>
        {filteredDeaths &&
          filteredDeaths.map((index) => (
            <li key={index}>
              <p>
                {convertDate(index)}: {deaths[index]} คน
              </p>
            </li>
          ))}
      </ul>

      <h2>Recovered Data:</h2>
      <ul>
        {filteredRecovered &&
          filteredRecovered.map((index) => (
            <li key={index}>
              <p>
                {convertDate(index)}: {recovered[index]} คน
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Historical;
