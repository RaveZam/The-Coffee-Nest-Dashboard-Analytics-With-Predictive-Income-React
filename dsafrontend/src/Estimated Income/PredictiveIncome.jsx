import { FaArrowTrendUp } from "react-icons/fa6";
export default function PredictiveIncome() {
  return (
    <div className="bg-gray-0 m-4 flex w-full flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
      <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
        <h1 className="mb-2 font-bold"> Estimated Income For Next Month </h1>
        <div className="flex">
          <h2 className="font-semibold text-blue-500">₱32,000</h2>
          <h5 className="ml-2 mt-1 text-[0.9vw] font-medium text-green-600">
            +5% Increase
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
  );
}
