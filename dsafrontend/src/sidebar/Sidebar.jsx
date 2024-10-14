import { FaHome } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from "react";

export default function Sidebar({ navigateTo }) {
  const [bgcolor, setbgcolor] = useState("text-prof-blue bg-[#E9EFFF]");
  const [activeButton, setActiveButton] = useState("Dashboard");

  return (
    <div className="mr-8 w-1/6 whitespace-nowrap py-4 pl-8">
      <h2 className="mb-2 mt-4 opacity-60">General</h2>
      <ul className="w-full cursor-pointer space-y-1">
        <li
          onClick={() => navigateTo("Dashboard") & setActiveButton("Dashboard")}
          className={`${activeButton === "Dashboard" ? bgcolor : ""} ${"flex rounded-lg p-4 pr-12 transition duration-300 hover:bg-[#E9EFFF] hover:text-prof-blue"}`}
        >
          <FaHome className="mr-4 translate-y-1 scale-150" />
          Dashboard
        </li>
        <li
          onClick={() => navigateTo("Products") & setActiveButton("Products")}
          className={`${activeButton === "Products" ? bgcolor : ""} ${"flex rounded-lg p-4 pr-12 transition duration-300 hover:bg-[#E9EFFF] hover:text-prof-blue"}`}
        >
          <BsBox className="mr-4 translate-y-1 scale-150" />
          Products
        </li>
        <li
          onClick={() =>
            navigateTo("EstimatedIncome") & setActiveButton("EstimatedIncome")
          }
          className={`${activeButton === "EstimatedIncome" ? bgcolor : ""} ${"flex rounded-lg p-4 pr-12 transition duration-300 hover:bg-[#E9EFFF] hover:text-prof-blue"}`}
        >
          <MdOutlineAttachMoney className="mr-4 translate-y-1 scale-150" />
          Weekly Insights
        </li>
        <li className="flex rounded-lg p-4 pr-8 transition duration-300 hover:bg-gray-200">
          <FaPeopleGroup className="mr-4 translate-y-1 scale-150" />
          Customers
        </li>
      </ul>
    </div>
  );
}
