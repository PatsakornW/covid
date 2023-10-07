import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [dateData, setDateData] = useState(new Date());
  const navigate = useNavigate();
  const handleDateChange = (date) => {
    setDateData(date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(2);

    const formattedDate = `${month} ${year}`;
    setDateData(date);
    navigate("/historical", { state: { dateData: formattedDate } });
  };
  return (
  <div className="flex-col ">
    <p>เลือกเดือน </p>
    <p>(อัพเดทล่าสุดถึงแค่เดือน Mar 2023)</p>
<DatePicker
className="border p-2 rounded"
      dateFormat="MM/yyyy"
      selected={dateData}
      onChange={handleDateChange}
      showMonthYearPicker
    />
  </div>
    
   
  );
};

export default Search;
