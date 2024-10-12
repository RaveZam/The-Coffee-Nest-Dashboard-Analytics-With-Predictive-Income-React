import MostPopularItem from "./MostPopularItem";
import { MdMoreHoriz } from "react-icons/md";
import IncreaseComponent from "../components/IncreaseComponent";
import { IoIosCalendar } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function TotalSales({ grosssales, itemsSold }) {
  const formattedGrossSale = grosssales.toLocaleString();
  return (
    <div>
      <div className="flex">
        <div>
          <h1 className="text-[2.2vw] font-semibold">Dashboard</h1>
          <span className="text-gray-600">Last 28 Days</span>
        </div>
        <div className="ml-auto flex items-center">
          <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-4">
            <h1 className="flex text-[0.8vw]">
              <IoIosCalendar className="mr-4 mt-1 scale-150" />
              September 3 - October 1
              <RiArrowDropDownLine className="ml-2 mt-1 scale-150" />
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        {/* // */}
        <div className="bg-gray-0 flex w-1/2 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2 transition-all">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-1 flex font-semibold">
              Total Gross Sales <MdMoreHoriz className="ml-auto scale-150" />
            </h1>

            <div className="flex">
              <h2 className="text-prof-blue text-2xl font-semibold">
                ${grosssales.toLocaleString()}
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
            <h1 className="mb-1 flex font-semibold">
              Total Items Sold <MdMoreHoriz className="ml-auto scale-150" />
            </h1>
            <div className="flex">
              <h2 className="text-prof-blue text-2xl font-semibold">
                {itemsSold}
              </h2>
              <span className="ml-1 translate-y-1 text-[1.1vw] text-gray-700">
                Products
              </span>
              <IncreaseComponent />
              {/* <h5 className="ml-2 mt-1 text-[0.9vw] font-medium text-green-600">
                +12% Increase
              </h5> */}
              {/* <FaArrowTrendUp className="ml-1 mt-1 text-green-600" /> */}
            </div>
          </div>
          <div className="flex">
            <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
              +34
            </span>
            <span className="py-1 text-[0.9vw] font-medium text-gray-500">
              more sold from last Month
            </span>
          </div>
        </div>

        <MostPopularItem />
      </div>
    </div>
  );
}
