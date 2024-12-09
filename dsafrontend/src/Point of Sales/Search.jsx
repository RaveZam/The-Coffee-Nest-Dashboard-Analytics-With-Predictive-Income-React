import { CiSearch } from "react-icons/ci";
import { PiCoffeeBeanFill } from "react-icons/pi";

export function Search({ setSearch, search }) {
  return (
    <div className="py-8">
      <div className="flex w-1/3 rounded-lg border-2 border-gray-300 px-4 py-2">
        <CiSearch className="mr-1" />
        <input
          className="text-[0.8rem] focus:border-none focus:outline-none"
          type="text"
          placeholder=" Search Product"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="mt-4 flex gap-4">
        <button className="rounded-lg px-4 py-2 shadow-sm duration-200 hover:bg-prof-blue hover:text-white hover:opacity-90">
          Iced Coffee
        </button>
        <button className="rounded-lg px-4 py-2 shadow-sm duration-200 hover:bg-prof-blue hover:text-white hover:opacity-90">
          Hot Coffee
        </button>
        <button className="rounded-lg px-4 py-2 shadow-sm duration-200 hover:bg-prof-blue hover:text-white hover:opacity-90">
          Milk Shakes
        </button>
        <button className="rounded-lg px-4 py-2 shadow-sm duration-200 hover:bg-prof-blue hover:text-white hover:opacity-90">
          Pastry
        </button>
      </div>
    </div>
  );
}
