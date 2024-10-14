import axios from "axios";
import { space } from "postcss/lib/list";
import { useContext, useEffect, useState } from "react";
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
import { GlobalDataContext } from "../contentarea/Contentarea";

export default function EstimatedIncome() {
  // const [salesPerWeek, setSalesPerWeek] = useState([0, 0, 0, 0]); SalesPerWeek
  const { salesPerWeek, setSalesPerWeek } = useContext(GlobalDataContext);

  const [salesPerDay, setsalesPerDay] = useState([]);
  const [previousMonth, setPreviousMonths] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [salesPerDay, previousMonth] = await Promise.all([
          axios.get("http://localhost:8000/api/totalpriceperday"),
          axios.get("http://localhost:8000/api/previousmonthsales"),
        ]);
        setsalesPerDay(salesPerDay.data);
        setPreviousMonths(previousMonth.data);
      } catch (error) {
        console.log;
      }
    };

    fetchData();
  }, []);
  // inefficient code i have that lags
  // const [lastMonthSalesPerWeek, setLastMonthSalesPerWeek] = useState([
  //   0, 0, 0, 0,
  // ]);
  // useEffect(() => {
  //   let weeks = [0, 0, 0, 0];
  //   previousMonth.forEach((item) => {
  //     const date = new Date(item.sale_date);
  //     const weekIndex = Math.floor(date.getDate() / 7);
  //     weeks[weekIndex] += parseFloat(item.final_price);
  //   });
  //   setLastMonthSalesPerWeek(weeks);
  // }, [previousMonth]);

  // const [salesPerWeek, setSalesPerWeek] = useState([0, 0, 0, 0]);
  // useEffect(() => {
  //   let weeks = [0, 0, 0, 0];
  //   salesPerDay.forEach((item) => {
  //     const date = new Date(item.sale_date);
  //     const weekIndex = Math.floor(date.getDate() / 7);
  //     weeks[weekIndex] += parseFloat(item.final_price);
  //   });
  //   setSalesPerWeek(weeks);
  // }, [salesPerDay]);
  //Gpt Version Below --
  //this is the value i need to Log

  // Utility function to calculate weekly sales
  const calculateWeeklySales = (data) => {
    const weeks = [0, 0, 0, 0]; // Array to hold sales for each week
    data.forEach((item) => {
      const date = new Date(item.sale_date);
      const weekIndex = Math.floor(date.getDate() / 7);
      weeks[weekIndex] += parseFloat(item.final_price);
    });
    return weeks;
  };

  const { lastMonthSalesPerWeek, setLastMonthSalesPerWeek } =
    useContext(GlobalDataContext);

  useEffect(() => {
    setLastMonthSalesPerWeek(calculateWeeklySales(previousMonth));
  }, [previousMonth]);

  useEffect(() => {
    setSalesPerWeek(calculateWeeklySales(salesPerDay));
  }, [salesPerDay]);

  // up to here

  const [week1Difference, setWeek1Difference] = useState();
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
    setWeek1Difference(
      ((salesPerWeek[0] - lastMonthSalesPerWeek[3]) /
        lastMonthSalesPerWeek[3]) *
        100,
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
        week1Difference={week1Difference}
        week2Difference={week2Difference}
        week3Difference={week3Difference}
        week4Difference={week4Difference}
        salesPerWeek={salesPerWeek}
        lastMonthSalesPerWeek={lastMonthSalesPerWeek}
      />
      <div className="flex gap-4">
        <WeeklyBarChart salesPerWeek={salesPerWeek} />
        <div className="m-4 ml-[-16px] w-full">
          <PredictiveIncome
            week1Difference={week1Difference}
            week2Difference={week2Difference}
            week3Difference={week3Difference}
            week4Difference={week4Difference}
          />
          <AverageSalesPerWeek />
        </div>
      </div>
    </div>
  );
}
