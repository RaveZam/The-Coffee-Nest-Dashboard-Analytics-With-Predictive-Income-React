import { FaHome } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Sidebar({ navigateTo }) {
  return (
    <div className="w-1/4 whitespace-nowrap p-12 pr-12">
      <ul className="w-full cursor-pointer space-y-4">
        <li
          onClick={() => navigateTo("Dashboard")}
          className="flex rounded-lg p-4 pr-12 transition duration-300 hover:bg-gray-200"
        >
          <FaHome className="mr-4 translate-y-1 scale-150" />
          Dashboard
        </li>
        <li
          onClick={() => navigateTo("Products")}
          className="flex rounded-lg p-4 pr-8 transition duration-300 hover:bg-gray-200"
        >
          <BsBox className="mr-4 translate-y-1 scale-150" />
          Products
        </li>
        <li
          onClick={() => navigateTo("EstimatedIncome")}
          className="flex rounded-lg p-4 pr-8 transition duration-300 hover:bg-gray-200"
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
