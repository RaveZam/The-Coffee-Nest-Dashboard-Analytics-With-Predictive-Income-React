import MostPopularItem from "./MostPopularItem";
import { MdMoreHoriz } from "react-icons/md";
import IncreaseComponent from "../components/IncreaseComponent";

export default function TotalSales({ grosssales, itemsSold }) {
  return (
    <div>
      <h1 className="text-[2.2vw]">Dashboard</h1>
      <span className="text-gray-600">Last 28 Days</span>
      <div className="mt-4 flex gap-4">
        {/* // */}
        <div className="bg-gray-0 flex w-1/2 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2 transition-all">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-1 flex font-semibold">
              Total Gross Sales <MdMoreHoriz className="ml-auto scale-150" />
            </h1>

            <div className="flex">
              <h2 className="text-prof-blue text-2xl font-semibold">
                ${grosssales}
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
        {/* // */}
        <div className="bg-gray-0 flex w-1/2 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2 transition-all duration-200">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-2 flex font-semibold">
              Total Items Sold <MdMoreHoriz className="ml-auto scale-150" />
            </h1>
            <div className="flex">
              <h2 className="text-prof-blue text-2xl font-semibold">
                {itemsSold}{" "}
                <span className="text-[1vw] text-gray-700">Products </span>
              </h2>
              {/* <h5 className="ml-2 mt-1 text-[0.9vw] font-medium text-green-600">
                +12% Increase
              </h5> */}
              {/* <FaArrowTrendUp className="ml-1 mt-1 text-green-600" /> */}
            </div>
          </div>
          {/* <div className="flex">
            <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
              +₱1580
            </span>
            <span className="py-1 text-[0.9vw] font-medium text-gray-500">
              from last week
            </span>
          </div> */}
        </div>

        <MostPopularItem />
      </div>
    </div>
  );
}
