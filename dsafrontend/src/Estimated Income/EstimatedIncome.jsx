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
      <h1 className="w-1/4 text-[2.2vw]">Weekly Insight</h1>
      <span className="text-gray-600">Last 28 Days</span>
      <WeeklyIncome salesPerWeek={salesPerWeek} />
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
