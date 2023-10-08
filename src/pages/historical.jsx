import React, { useEffect, useState } from "react";
import Chart from "../components/chart";
import Table from "../components/table";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Tab from "../components/tab";
const Historical = () => {
  const location = useLocation();
  const dateData = location.state?.dateData || null;
  const [cases, setCases] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [filteredCases, setFilteredCases] = useState(null);
  const [filteredDeaths, setFilteredDeaths] = useState(null);
  const [filteredRecovered, setFilteredRecovered] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("chart");

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {
        setCases(response.data.cases);
        setDeaths(response.data.deaths);
        setRecovered(response.data.recovered);
        setIsLoading(false);
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

  return (
    <div>
      {isLoading ? (
        <p className="flex w-full justify-center mt-5 text-2xl font-bold tracking-wider">
          Loading
        </p>
      ) : (
        <div>
          {filteredCases && filteredCases.length > 1 ? (
            <div>
              <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
              {activeTab === "chart" ? (
                <Chart
                  cases={cases}
                  deaths={deaths}
                  recovered={recovered}
                  filteredCases={filteredCases}
                  filteredDeaths={filteredDeaths}
                  filteredRecovered={filteredRecovered}
                />
              ) : (
                <Table
                  cases={cases}
                  deaths={deaths}
                  recovered={recovered}
                  filteredCases={filteredCases}
                  filteredDeaths={filteredDeaths}
                  filteredRecovered={filteredRecovered}
                />
              )}
            </div>
          ) : (
            <p className="text-center text-xl font-semibold mt-5">
              ไม่มีข้อมูลสำหรับการแสดง Chart และ Table <br />
              (ข้อมูลอัพเดทล่าสุดถึง Mar 2023)
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Historical;
