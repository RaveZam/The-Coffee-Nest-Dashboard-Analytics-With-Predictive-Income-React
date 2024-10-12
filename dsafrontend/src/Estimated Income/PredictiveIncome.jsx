import IncreaseComponent from "../components/IncreaseComponent";

export default function PredictiveIncome() {
  return (
    <div className="bg-gray-0 m-4 flex w-full flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
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
          more from Previous Month
        </span>
      </div>
    </div>
  );
}
