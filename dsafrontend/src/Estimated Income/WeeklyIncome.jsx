import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
export default function WeeklyIncome({ salesPerWeek }) {
  return (
    <div className="mt-4">
      <h1 className="font-semibold text-[1.8]">
        Sales Report From Corresponding Previous Weeks
      </h1>
      <div className="mt-4 flex gap-4">
        <div className="w-1/4 flex-col rounded-2xl bg-white p-4 drop-shadow-md">
          <h1 className="mb-1 font-bold"> Week 1 Sales </h1>
          <div className="flex">
            <h2 className="font-semibold text-blue-600"> ₱{salesPerWeek[0]}</h2>
          </div>
        </div>
        <div className="w-1/4 flex-col rounded-2xl bg-white p-4 drop-shadow-md">
          <h1 className="mb-1 font-bold"> Week 2 Sales </h1>
          <div className="flex">
            <h2 className="font-semibold text-blue-600"> ₱{salesPerWeek[1]}</h2>
            <h5 className="ml-2 mt-1 text-[0.9vw] font-medium text-green-600">
              +12% Increase
            </h5>
            <FaArrowTrendUp className="ml-1 mt-1 text-green-600" />
          </div>
        </div>
        <div className="w-1/4 flex-col rounded-2xl bg-white p-4 drop-shadow-md">
          <h1 className="mb-1 font-bold"> Week 3 Sales </h1>
          <div className="flex">
            <h2 className="font-semibold text-blue-600"> ₱{salesPerWeek[2]}</h2>
            <h5 className="ml-2 mt-1 text-[0.9vw] font-medium text-green-600">
              +12% Increase
            </h5>
            <FaArrowTrendUp className="ml-1 mt-1 text-green-600" />
          </div>
        </div>
        <div className="w-1/4 flex-col rounded-2xl bg-white p-4 drop-shadow-md">
          <h1 className="mb-1 font-bold"> Week 4 Sales </h1>
          <div className="flex">
            <h2 className="font-semibold text-blue-600">₱{salesPerWeek[3]}</h2>
            <h5 className="ml-2 mt-1 text-[0.9vw] font-medium text-red-600">
              -5% Increase
            </h5>
            <FaArrowTrendDown className="ml-1 mt-1 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
