import React from "react";

const Table = ({
  cases,
  deaths,
  recovered,
  filteredCases,
  filteredDeaths,
  filteredRecovered,
}) => {
  const covert = (data) => {
    if (data !== undefined && data !== null) {
      return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  }
  return (
      <div className="w-fit lg:w-[700px] mx-auto bg-white shadow-lg rounded-xl border border-gray-300">
        <header className="px-3 py-2 lg:px-5 lg:py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800 text-xl">จำนวนทั้งหมด</h2>
        </header>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
             
                <tr className=" font-semibold uppercase text-gray-400 bg-gray-50">
                  <th className="p-2  lg:p-4 whitespace-nowrap">
                    <div className="text-sm lg:text-base font-semibold text-left">วันที่</div>
                  </th>
                  <th className="p-2  lg:p-4 whitespace-nowrap">
                    <div className="text-sm lg:text-base font-semibold text-left">ติดเชื้อ</div>
                  </th>
                  <th className="p-2  lg:p-4 whitespace-nowrap">
                    <div className="text-sm lg:text-base font-semibold text-left">รักษาหาย</div>
                  </th>
                  <th className="p-2 lg:p-4 whitespace-nowrap">
                    <div className="text-sm lg:text-base font-semibold text-left">เสียชีวิต</div>
                  </th>
                </tr>
       
             
                  {filteredCases &&
                    filteredCases.map((date, index) => (
                      <tr key={index} className="divide-y divide-gray-200">
                        <td className="p-2 lg:p-4 whitespace-nowrap">
                          <div className="text-sm lg:text-base text-left">{date}</div>
                        </td>
                        <td className="p-2 lg:p-4 whitespace-nowrap">
                          <div className="text-sm lg:text-base text-left font-medium text-red-600">
                            {covert(cases[date])}
                          </div>
                        </td>
                        <td className="p-2 lg:p-4 whitespace-nowrap">
                          <div className="text-left font-medium text-green-600">
                            {covert(recovered[date])}
                          </div>
                        </td>
                        <td className="p-2 lg:p-4 whitespace-nowrap">
                          <div className="text-sm lg:text-base text-left font-medium text-gray-600">
                            {covert(deaths[date])}
                          </div>
                        </td>
                      </tr>
                    ))}
   
            </table>
          </div>
        </div>
  );
};

export default Table;
