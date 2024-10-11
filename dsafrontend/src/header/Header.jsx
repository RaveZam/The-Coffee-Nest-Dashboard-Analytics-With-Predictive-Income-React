import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div className="w-full justify-end border-b-2 border-gray-300 bg-gray-50">
      <div className="ml-auto flex w-1/6 items-center border-2 border-gray-500 p-2">
        <img
          className="h-12 w-12 rounded-full"
          src="./images/Flower.jfif"
          alt="Flower"
        />
        <h1>Runielle Raven</h1>
      </div>
    </div>
  );
}
