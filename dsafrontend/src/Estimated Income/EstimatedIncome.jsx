import axios from "axios";
import { space } from "postcss/lib/list";
import { useEffect, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { LineChart } from "recharts";
import LineGraph from "../dashboard/LineGraph";
import WeeklyIncome from "./WeeklyIncome";
import WeeklyBarChart from "./WeeklyBarChart";
import PredictiveIncome from "./PredictiveIncome";
import AverageSalesPerWeek from "./AverageSalesPerWeek";
import { IoIosCalendar } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function EstimatedIncome() {
  const [salesPerDay, setsalesPerDay] = useState([]);

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

  const [week2Difference, setWeek2Difference] = useState();
  const [week3Difference, setWeek3Difference] = useState();
  const [week4Difference, setWeek4Difference] = useState();

  useEffect(() => {
    setWeek2Difference(
      ((salesPerWeek[1] - salesPerWeek[0]) / salesPerWeek[0]) * 100,
    );

    setWeek3Difference(
      ((salesPerWeek[2] - salesPerWeek[1]) / salesPerWeek[1]) * 100,
    );

    setWeek4Difference(
      ((salesPerWeek[3] - salesPerWeek[2]) / salesPerWeek[2]) * 100,
    );
  }, [salesPerDay]);

  return (
    <div className="flex-wrap">
      <div className="flex">
        <div>
          <h1 className="text-[2.2vw]">Weekly Insight</h1>
          <span className="text-gray-600">Last 28 Days</span>
        </div>
        <div className="ml-auto flex items-center">
          <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-4">
            <h1 className="flex text-[0.8vw]">
              <IoIosCalendar className="mr-4 mt-1 scale-150" />
              September 3 - October 1
              <RiArrowDropDownLine className="ml-2 mt-1 scale-150" />
            </h1>
          </div>
        </div>
      </div>
      <WeeklyIncome
        week2Difference={week2Difference}
        week3Difference={week3Difference}
        week4Difference={week4Difference}
        salesPerWeek={salesPerWeek}
      />
      <div className="flex gap-4">
        <WeeklyBarChart salesPerWeek={salesPerWeek} />
        <div className="w-full">
          <PredictiveIncome />
          <AverageSalesPerWeek />
        </div>
      </div>
    </div>
  );
}
