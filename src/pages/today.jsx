import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/card";

const Today = () => {
  const [covidToday, setCovidToday] = useState([]);
  console.log(covidToday);
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((response) => {
        setCovidToday(response.data);
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  }, []);

  const cardData = [
    {
      title_new: "จำนวนผู้ติดเชื้อ",
      today: covidToday.todayCases,
      title_total: "ติดเชื้อสะสม",
      total:covidToday.cases,
      bg:"bg-red-600"

    },
    {
      title_new: "จำนวนผู้รักษาหาย",
      today: covidToday.todayRecovered,
      title_total: "รักษาหายสะสม",
      total:covidToday.recovered,
      bg:"bg-green-600"

    },
    {
      title_new: "จำนวนผู้เสียชีวิต",
      today: covidToday.todayDeaths ,
      title_total: "เสียชีวิตสะสม",
      total:covidToday.deaths,
      bg:"bg-gray-600"

    },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-10">
      {cardData.map((item, index) => (
        <Card
          key={index}
          title_new={item.title_new}
          today={item.today}
          title_total={item.title_total}
          total={item.total}
          bg={item.bg}
        />
      ))}
    </div>
  );
};

export default Today;
