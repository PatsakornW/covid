import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Historical = () => {
  const location = useLocation();
  const dateData = location.state?.dateData || null;
  const [cases, setCases] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [filteredCases, setFilteredCases] = useState(null);
  const [filteredDeaths, setFilteredDeaths] = useState(null); // State for filtered deaths
  const [filteredRecovered, setFilteredRecovered] = useState(null); // State for filtered recovered

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
    const [month, day, year] = index.split('/');
    return `${month} ${year}`;
  };

  return (
    <div>
      <p>{dateData}</p>
      <h2>Cases Data:</h2>
      <ul>
        {filteredCases &&
          filteredCases.map((index) => (
            <li key={index}>
              {convertDate(index)}: {cases[index]}
              <span> (This is the selected date)</span>
            </li>
          ))}
      </ul>

      <h2>Deaths Data:</h2>
      <ul>
        {filteredDeaths &&
          filteredDeaths.map((index) => (
            <li key={index}>
              {convertDate(index)}: {deaths[index]}
              <span> (This is the selected date)</span>
            </li>
          ))}
      </ul>

      <h2>Recovered Data:</h2>
      <ul>
        {filteredRecovered &&
          filteredRecovered.map((index) => (
            <li key={index}>
              {convertDate(index)}: {recovered[index]}
              <span> (This is the selected date)</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Historical;
