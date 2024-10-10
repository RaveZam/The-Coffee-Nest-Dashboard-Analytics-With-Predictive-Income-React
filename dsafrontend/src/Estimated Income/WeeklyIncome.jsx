import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
export default function WeeklyIncome({ salesPerWeek }) {
  return (
    <div className="mt-4">
      <h1 className="font-semibold text-[1.8]">
        Sales Report From Corresponding Previous Weeks
      </h1>
      <div className="mt-4 flex gap-4">
        <div className="bg-gray-0 flex w-1/4 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-1 font-bold"> Week 1 Sales </h1>
            <div className="flex">
              <h2 className="font-semibold text-blue-500">
                ₱{salesPerWeek[0]}
              </h2>
              <h5 className="ml-2 mt-1 text-[0.9vw] font-medium text-green-600">
                0% Increase
              </h5>
              <FaArrowTrendUp className="ml-1 mt-1 text-green-600" />
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
            <h1 className="mb-1 font-bold"> Week 2 Sales </h1>
            <div className="flex">
              <h2 className="font-semibold text-blue-500">
                ₱{salesPerWeek[1]}
              </h2>
              <h5 className="ml-2 mt-1 text-[0.9vw] font-medium text-green-600">
                +12% Increase
              </h5>
              <FaArrowTrendUp className="ml-1 mt-1 text-green-600" />
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
            <h1 className="mb-1 font-bold"> Week 3 Sales </h1>
            <div className="flex">
              <h2 className="font-semibold text-blue-500">
                ₱{salesPerWeek[2]}
              </h2>
              <h5 className="ml-2 mt-1 text-[0.9vw] font-medium text-green-600">
                +12% Increase
              </h5>
              <FaArrowTrendUp className="ml-1 mt-1 text-green-600" />
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
            <h1 className="mb-1 font-bold"> Week 4 Sales </h1>
            <div className="flex">
              <h2 className="font-semibold text-blue-500">
                ₱{salesPerWeek[3]}
              </h2>
              <h5 className="ml-2 mt-1 text-[0.9vw] font-medium text-green-600">
                +12% Increase
              </h5>
              <FaArrowTrendUp className="ml-1 mt-1 text-green-600" />
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
