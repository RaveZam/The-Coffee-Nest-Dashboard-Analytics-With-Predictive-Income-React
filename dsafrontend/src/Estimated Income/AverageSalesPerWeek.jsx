import { FaArrowTrendUp } from "react-icons/fa6";
import IncreaseComponent from "../components/IncreaseComponent";
import DecreaseComponent from "../components/DecreaseComponent";
import SmallLoading from "../preloaders/SmallLoading";
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../contentarea/Contentarea";
export default function AverageSalesPerWeek() {
  const { AverageWeeklySales, salesPerWeek, lastMonthSalesPerWeek } =
    useContext(GlobalDataContext);

  const [weeklyAverage, setWeeklyAverage] = useState();
  const [lastMonthWeeklyAverage, setLastMonthWeeklyAverage] = useState();
  const [weeklyDifference, setWeeklyDifference] = useState(); //Difference of the weekly average from this month to last month
  useEffect(() => {
    let average =
      (salesPerWeek[0] + salesPerWeek[1] + salesPerWeek[2] + salesPerWeek[3]) /
      4;
    let lastMonthAverage =
      (lastMonthSalesPerWeek[0] +
        lastMonthSalesPerWeek[1] +
        lastMonthSalesPerWeek[2] +
        lastMonthSalesPerWeek[3]) /
      4;
    setWeeklyAverage(average);
    setLastMonthWeeklyAverage(lastMonthAverage);
    setWeeklyDifference(
      ((weeklyAverage - lastMonthWeeklyAverage) / lastMonthWeeklyAverage) * 100,
    );
  }, [salesPerWeek]);
  // I Neeed last months weekly sales here
  return (
    <>
      <div className="bg-gray-0 m-4 flex w-full flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
        <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
          <h1 className="mb-2 font-bold"> Average Weekly Sales </h1>

          <div className="flex">
            {isNaN(weeklyAverage) || weeklyAverage === 0 ? (
              <div className="mt-2">
                <SmallLoading />
              </div>
            ) : weeklyAverage > 0 ? (
              <h2 className="flex text-2xl font-semibold text-prof-blue">
                <span className="animate-appearFromTop">
                  ₱{weeklyAverage.toLocaleString()}
                </span>
                <IncreaseComponent value={weeklyDifference.toFixed(2)} />
              </h2>
            ) : (
              <h2 className="flex text-2xl font-semibold text-prof-blue">
                <span className="animate-appearFromTop">
                  ${weeklyAverage.toLocaleString()}
                </span>
                <DecreaseComponent value={weeklyDifference.toFixed(2)} />
              </h2>
            )}
          </div>
        </div>
        <div className="flex">
          <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
            {weeklyAverage - lastMonthWeeklyAverage < 0
              ? `-₱${Math.abs(weeklyAverage - lastMonthWeeklyAverage)}`
              : `+₱${weeklyAverage - lastMonthWeeklyAverage}`}
          </span>
          <span className="py-1 text-[0.9vw] font-medium text-gray-500">
            Compared to Last Month
          </span>
        </div>
      </div>
    </>
  );
}
