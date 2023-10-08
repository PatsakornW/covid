import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/card";

const Today = () => {
  const [covidToday, setCovidToday] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(covidToday);
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((response) => {
        setCovidToday(response.data);
        setIsLoading(false);
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
      total: covidToday.cases,
      bg: "bg-red-600",
    },
    {
      title_new: "จำนวนผู้รักษาหาย",
      today: covidToday.todayRecovered,
      title_total: "รักษาหายสะสม",
      total: covidToday.recovered,
      bg: "bg-green-600",
    },
    {
      title_new: "จำนวนผู้เสียชีวิต",
      today: covidToday.todayDeaths,
      title_total: "เสียชีวิตสะสม",
      total: covidToday.deaths,
      bg: "bg-gray-600",
    },
  ];
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // เพิ่ม 1 เนื่องจากเดือนใน JavaScript เริ่มจาก 0
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div>
      <p className="w-full ms-4">อัพเดทล่าสุด {formattedDate}</p>
      {isLoading ? (
        <p className="flex w-full justify-center mt-5 text-2xl font-bold tracking-wider">
          Loading
        </p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {cardData?.map((item, index) => (
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
      )}
    </div>
  );
};

export default Today;
