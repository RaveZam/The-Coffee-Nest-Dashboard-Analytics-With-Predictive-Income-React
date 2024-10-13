import IncreaseComponent from "../components/IncreaseComponent";
import DecreaseComponent from "../components/DecreaseComponent";
import SmallLoading from "../preloaders/SmallLoading";

import { useEffect, useState, useContext } from "react";
import { GrossSalesContext } from "../dashboard/Dashboard";

export default function PredictiveIncome({
  week1Difference,
  week2Difference,
  week3Difference,
  week4Difference,
}) {
  const { grosssales } = useContext(GrossSalesContext);
  const [NextMonthGross, setNextMonthGross] = useState(0);
  const [monthlyIncrease, setMonthlyIncrease] = useState();
  useEffect(() => {
    const total =
      week1Difference + week2Difference + week3Difference + week4Difference;
    const avg = total / 4;
    let decimalavg = avg / 100;
    setNextMonthGross(grosssales * (1 + decimalavg));
    setMonthlyIncrease(((NextMonthGross - grosssales) / grosssales) * 100);
  }, [
    week1Difference,
    week2Difference,
    week3Difference,
    week4Difference,
    monthlyIncrease,
    NextMonthGross,
  ]);
  const formattedGross = parseFloat(NextMonthGross.toFixed(2)).toLocaleString();
  return (
    <div className="bg-gray-0 m-4 flex w-full flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
      <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
        <h1 className="mb-2 font-bold"> Estimated Gross Sales Next Month </h1>
        <div className="flex">
          <h2 className="text-prof-blue text-[1.5vw] font-semibold">
            ₱{formattedGross}
          </h2>
          {isNaN(monthlyIncrease) ? (
            <SmallLoading />
          ) : monthlyIncrease > 0 ? (
            <IncreaseComponent value={monthlyIncrease.toFixed(2)} />
          ) : (
            <DecreaseComponent value={monthlyIncrease.toFixed(2)} />
          )}
        </div>
      </div>
      <div className="mt-1 flex">
        <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
          {NextMonthGross - grosssales < 0
            ? `-₱${Math.abs(NextMonthGross - grosssales).toFixed(2)}`
            : `+₱${(NextMonthGross - grosssales).toFixed(2)}`}
        </span>
        <span className="py-1 text-[0.9vw] font-medium text-gray-500">
          more from Current Month
        </span>
      </div>
    </div>
  );
}
