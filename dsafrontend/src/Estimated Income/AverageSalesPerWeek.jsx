import { FaArrowTrendUp } from "react-icons/fa6";
import IncreaseComponent from "../components/IncreaseComponent";
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../contentarea/Contentarea";
export default function AverageSalesPerWeek() {
  const { AverageWeeklySales, setAverageWeeklySales, salesPerWeek } =
    useContext(GlobalDataContext);

  const [weeklyAverage, setWeeklyAverage] = useState();
  useEffect(() => {
    let average =
      (salesPerWeek[0] + salesPerWeek[1] + salesPerWeek[2] + salesPerWeek[3]) /
      4;
    setWeeklyAverage(average);
  }, []);

  return (
    <>
      <div className="bg-gray-0 m-4 flex w-full flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
        <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
          <h1 className="mb-2 font-bold"> Average Weekly Sales </h1>
          <div className="flex">
            <h2 className="font-semibold text-prof-blue">{weeklyAverage}</h2>
            <IncreaseComponent />
          </div>
        </div>
        <div className="flex">
          <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
            +₱1580
          </span>
          <span className="py-1 text-[0.9vw] font-medium text-gray-500">
            from last week You are Doing Great!
          </span>
        </div>
      </div>
    </>
  );
}
