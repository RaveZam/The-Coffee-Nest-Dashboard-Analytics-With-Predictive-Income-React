import { FaArrowTrendUp } from "react-icons/fa6";
export default function AverageSalesPerWeek() {
  return (
    <>
      <div className="m-4 w-full rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-4 drop-shadow-md">
        <div className="rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
          <h3 className="font-bold opacity-70">Average Gross Sales Per Week</h3>
          <h1 className="mt-2 text-[1.5vw] font-semibold text-blue-500">
            ₱1200
          </h1>
        </div>
        <div className="mt-2 flex">
          <span className="flex pl-2 text-[1.1vw] font-semibold text-green-500">
            +0.8% <FaArrowTrendUp className="ml-1 mt-1 text-green-600" />
          </span>

          <span className="pl-1 pt-0.5 text-[1vw] font-medium text-green-500">
            Increase Each Week
          </span>
        </div>
      </div>
    </>
  );
}
