import axios from "axios";
import { space } from "postcss/lib/list";
import { useEffect, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

export default function EstimatedIncome() {
  const [salesPerDay, setsalesPerDay] = useState([]);
  //   const [weeklyDifference, setWeeklyyDifference] = useState([0, 0, 0, 0]);
  let week1Difference = 0;
  let week2Difference = 0;
  let week3Difference = 0;
  let week4Difference = 0;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/totalpriceperday")
      .then((response) => {
        setsalesPerDay(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [salesPerWeek, setSalesPerWeek] = useState([0, 0, 0, 0]);

  useEffect(() => {
    let weeks = [0, 0, 0, 0];
    salesPerDay.forEach((item) => {
      const date = new Date(item.sale_date);
      const weekIndex = Math.floor(date.getDate() / 7);
      weeks[weekIndex] += parseFloat(item.final_price);
    });
    setSalesPerWeek(weeks);
  }, [salesPerDay]);

  useEffect(() => {
    week2Difference =
      ((salesPerWeek[1] - salesPerWeek[0]) / salesPerWeek[1]) * 100;
    week3Difference =
      ((salesPerWeek[2] - salesPerWeek[1]) / salesPerWeek[2]) * 100;
    week4Difference =
      ((salesPerWeek[3] - salesPerWeek[2]) / salesPerWeek[3]) * 100;

    console.log(week2Difference.toFixed(0, 2) + "% Increase from last week");
  }, [salesPerDay]);

  return (
    <div className="flex-wrap">
      <h1 className="w-1/4 border-b-2 border-gray-200 pb-2 text-[2vw] font-semibold">
        Weekly Insight
      </h1>
      <div className="mt-4">
        {/* Estimate Income Area: */}
        <div className="w-2/4">
          <h2 className="text-[1vw] font-semibold opacity-80">
            Estimated Income Next Month:
          </h2>
          <div className="borde-gray-200 mt-4 rounded-xl border-2 bg-white p-4">
            <h2 className="text-[1.2vw] font-medium text-blue-600">
              ₱2800 - ₱3200
            </h2>
          </div>
        </div>
        {/* //Sales Report Area Per Week */}
        <div className="mr-8 mt-8">
          <h1 className="mb-4 text-[1vw] font-semibold">
            Sales Report From Corresponding Weeks
          </h1>
          <div className="flex gap-4">
            <div className="w-1/2 rounded-2xl border-2 border-gray-300 bg-white p-4 px-6">
              <h2 className="text-[1.3vw] font-semibold"> Week 2 Sales </h2>
              <h1 className="flex text-[1.1vw] font-semibold text-green-500">
                {week2Difference}% Sales
                <FaArrowTrendUp className="ml-2 mt-1" />
              </h1>
            </div>
            <div className="w-1/2 rounded-2xl border-2 border-gray-300 bg-white p-4 px-6">
              <h2 className="text-[1.3vw] font-semibold">Week 3 Sales </h2>
              <h1 className="flex text-[1.1vw] font-semibold text-green-500">
                +12% Sales <FaArrowTrendUp className="ml-2 mt-1" />
              </h1>
            </div>
            <div className="w-1/2 rounded-2xl border-2 border-gray-300 bg-white p-4 px-6">
              <h2 className="text-[1.3vw] font-semibold">Week 4 Sales </h2>
              <h1 className="flex text-[1.1vw] font-semibold text-red-500">
                -5% Sales <FaArrowTrendDown className="ml-2 mt-1" />
              </h1>
            </div>
            {/* <button onClick={() => computeWeeklyDfference()}> Press </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="h-120 m-4 flex flex-col rounded-lg p-4">
          <h1>Data:</h1>
          <h2>Week 1 Total Sales: {salesPerWeek[0]} PHP </h2>
          <h2>Week 2 Total Sales: {salesPerWeek[1]} PHP </h2>
          <h2>Week 3 Total Sales: {salesPerWeek[2]} PHP </h2>
          <h2>Week 4 Total Sales: {salesPerWeek[3]} PHP </h2>
        </div> */
}
