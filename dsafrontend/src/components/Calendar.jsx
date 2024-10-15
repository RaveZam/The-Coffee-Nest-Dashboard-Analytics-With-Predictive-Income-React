import { IoIosCalendar } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";

export function Calendar({}) {
  return (
    <div className="ml-auto flex items-center">
      <div className="flex rounded-2xl border-2 border-gray-200 bg-white">
        <h1 className="flex p-4 text-[0.8vw]">
          <IoIosCalendar className="mr-4 mt-1 scale-150" />
          September 3 - October 1
          <RiArrowDropDownLine className="ml-2 mt-1 scale-150" />
        </h1>
        <div className="flex items-center border-l-2 border-gray-200">
          <span className="flex p-4 text-[0.8vw]">
            Monthly <RiArrowDropDownLine className="mt-1 scale-150" />
          </span>
        </div>
      </div>
      <div className="ml-4 rounded-2xl border-2 border-gray-200 p-4 text-[0.8vw]">
        <h1 className="flex">
          <GoDownload className="mr-1 translate-y-[2px]" />
          Export
        </h1>
      </div>
    </div>
  );
}
