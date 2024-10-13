import IncreaseComponent from "../components/IncreaseComponent";
import { useEffect, useState } from "react";

export default function PredictiveIncome(
  week1Difference,
  week2Difference,
  week3Difference,
  week4Difference,
) {
  // let percentages = [
  //   week1Difference,
  //   week2Difference,
  //   week3Difference,
  //   week4Difference,
  // ];

  const [average, setaverage] = useState(0);
  let total = 0;
  const [hasloaded, sethasloaded] = useState(false);
  useEffect(() => {
    console.log(week1Difference);
    console.log("tick");
  }, [week1Difference]);

  useEffect(() => {
    if (isNaN(week1Difference) || week1Difference == undefined) {
      console.log("Not Loaded");
    } else if (week1Difference > 0) {
      sethasloaded(true);
      console.log("Hasloaded");
      console.log(hasloaded);
    }
  }, [hasloaded]);

  // if (percentages[0] > 0 || isNaN(percentages[1])) {
  //   console.log("fail");
  //   console.log(week1Difference);
  // } else {
  //   console.log("Meron Na");
  // total = percentages.reduce((acc, current) => {
  //   console.log("Pushed");
  //   let value = parseFloat(current.replace("%", ""));
  //   total = acc + value;
  // }, 0);

  return (
    <div className="bg-gray-0 m-4 flex w-full flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
      <button onClick={() => console.log(total)}></button>
      <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
        <h1 className="mb-2 font-bold"> Estimated Revenue Next Month </h1>
        <div className="flex">
          <h2 className="text-prof-blue text-[1.5vw] font-semibold">₱32,000</h2>
          <IncreaseComponent />
        </div>
      </div>
      <div className="mt-1 flex">
        <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
          +₱1580
        </span>
        <span className="py-1 text-[0.9vw] font-medium text-gray-500">
          more from Current Month
        </span>
      </div>
    </div>
  );
}
