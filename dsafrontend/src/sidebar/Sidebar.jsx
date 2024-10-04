import { FaHome } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Sidebar({ navigateTo }) {
  return (
    <div className="w-1/3 pl-12 pt-12 mr-2">
      <ul className="space-y-4 cursor-pointer w-full">
        <li
          onClick={() => navigateTo("Dashboard")}
          className="flex  p-4 hover:bg-gray-200 transition duration-300 rounded-lg "
        >
          <FaHome className="scale-150 mr-4" />
          Dashboard
        </li>
        <li
          onClick={() => navigateTo("Products")}
          className="flex p-4 hover:bg-gray-200 transition duration-300 rounded-lg"
        >
          <BsBox className="scale-150 mr-4" />
          Products
        </li>
        <li
          onClick={() => navigateTo("Products")}
          className="flex p-4 hover:bg-gray-200 transition duration-300 rounded-lg"
        >
          <MdOutlineAttachMoney className="scale-150 mr-4" />
          Estimated Incomes
        </li>
        <li className="flex p-4 hover:bg-gray-200 transition duration-300 rounded-lg">
          <FaPeopleGroup className="scale-150 mr-4" />
          Customers
        </li>
      </ul>
    </div>
  );
}
