import { FaHome } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Sidebar({ navigateTo }) {
  return (
    <div className="w-1/4 p-12 pr-12 whitespace-nowrap">
      <ul className="space-y-4 cursor-pointer w-full">
        <li
          onClick={() => navigateTo("Dashboard")}
          className="flex  p-4 hover:bg-gray-200 transition duration-300 rounded-lg pr-12 "
        >
          <FaHome className="scale-150 mr-4 translate-y-1" />
          Dashboard
        </li>
        <li
          onClick={() => navigateTo("Products")}
          className="flex p-4 hover:bg-gray-200 transition duration-300 rounded-lg pr-8"
        >
          <BsBox className="scale-150 mr-4 translate-y-1" />
          Products
        </li>
        <li
          onClick={() => navigateTo("Products")}
          className="flex p-4 hover:bg-gray-200 transition duration-300 rounded-lg pr-8"
        >
          <MdOutlineAttachMoney className="scale-150 mr-4 translate-y-1" />
          Estimated Incomes
        </li>
        <li className="flex p-4 hover:bg-gray-200 transition duration-300 rounded-lg pr-8">
          <FaPeopleGroup className="scale-150 mr-4 translate-y-1" />
          Customers
        </li>
      </ul>
    </div>
  );
}
