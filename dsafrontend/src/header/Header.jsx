import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiCoffeeBeanFill } from "react-icons/pi";

export default function Header() {
  return (
    <div className="flex w-full justify-end border-b-2 border-gray-300 bg-gray-50">
      <div className="ml-8 flex items-center">
        <h1 className="flex text-[1.8vw]">
          <PiCoffeeBeanFill className="mr-4 mt-2 scale-150" />
          The Coffee Nest
        </h1>
      </div>
      <div className="m-2 ml-auto flex w-1/6 items-center border-l-2 border-gray-200 p-2">
        <img
          className="ml-4 h-12 w-12 rounded-full"
          src="./images/Flower.jfif"
          alt="Flower"
        />
        <h1 className="ml-2">Runielle Raven</h1>
      </div>
    </div>
  );
}
