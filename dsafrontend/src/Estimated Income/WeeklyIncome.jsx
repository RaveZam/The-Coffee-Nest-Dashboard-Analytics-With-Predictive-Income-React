import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import IncreaseComponent from "../components/IncreaseComponent";
import DecreaseComponent from "../components/DecreaseComponent";
export default function WeeklyIncome({
  salesPerWeek,
  week2Difference,
  week3Difference,
  week4Difference,
}) {
  // if ((week2Difference = NaN)) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="mt-2">
      <h1 className="text-[1vw] font-semibold">
        Sales Report From Corresponding Previous Weeks
      </h1>
      <div className="mt-2 flex gap-4">
        <div className="bg-gray-0 flex w-1/4 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-2 font-bold"> Week 1 Sales </h1>
            <div className="flex">
              <h2 className="text-prof-blue font-semibold">
                ₱{salesPerWeek[0]}
              </h2>
            </div>
          </div>
          <div className="flex">
            <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
              +₱0
            </span>
            <span className="py-1 text-[0.9vw] font-medium text-gray-500">
              from last week
            </span>
          </div>
        </div>
        <div className="bg-gray-0 flex w-1/4 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-2 font-bold"> Week 2 Sales </h1>
            <div className="flex">
              <h2 className="text-prof-blue font-semibold">
                ₱{salesPerWeek[1]}
              </h2>
              <IncreaseComponent value={week2Difference.toFixed(2)} />
            </div>
          </div>
          <div className="flex">
            <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
              +₱1580
            </span>
            <span className="py-1 text-[0.9vw] font-medium text-gray-500">
              from last week
            </span>
          </div>
        </div>

        <div className="bg-gray-0 flex w-1/4 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-2 font-bold"> Week 3 Sales </h1>
            <div className="flex">
              <h2 className="text-prof-blue font-semibold">
                ₱{salesPerWeek[2]}
              </h2>
              <DecreaseComponent />
            </div>
          </div>
          <div className="flex">
            <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
              +₱1580
            </span>
            <span className="py-1 text-[0.9vw] font-medium text-gray-500">
              from last week
            </span>
          </div>
        </div>

        <div className="bg-gray-0 flex w-1/4 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-2 font-bold"> Week 4 Sales </h1>
            <div className="flex">
              <h2 className="text-prof-blue font-semibold">
                ₱{salesPerWeek[3]}
              </h2>

              <IncreaseComponent />
            </div>
          </div>
          <div className="flex">
            <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
              +₱1580
            </span>
            <span className="py-1 text-[0.9vw] font-medium text-gray-500">
              from last week
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
