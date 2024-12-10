import { CiSearch } from "react-icons/ci";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { useState } from "react";

export function Search({
  setSearch,
  search,
  setCategoryChosen,
  categoryChosen,
}) {
  const [bgcolor, setbgcolor] = useState("bg-prof-blue text-white");

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
        <button
          onClick={() =>
            categoryChosen === "Iced Coffee"
              ? setCategoryChosen("")
              : setCategoryChosen("Iced Coffee")
          }
          className={`${categoryChosen === "Iced Coffee" ? bgcolor : ""} ${"rounded-lg px-4 py-2 shadow-sm duration-200 hover:bg-prof-blue hover:text-white hover:opacity-90"}`}
        >
          Iced Coffee
        </button>
        <button
          onClick={() =>
            categoryChosen === "Hot Coffee"
              ? setCategoryChosen("")
              : setCategoryChosen("Hot Coffee")
          }
          className={`${categoryChosen === "Hot Coffee" ? bgcolor : ""} ${"rounded-lg px-4 py-2 shadow-sm duration-200 hover:bg-prof-blue hover:text-white hover:opacity-90"}`}
        >
          Hot Coffee
        </button>
        <button
          onClick={() =>
            categoryChosen === "Milk Shake"
              ? setCategoryChosen("")
              : setCategoryChosen("Milk Shake")
          }
          className={`${categoryChosen === "Milk Shake" ? bgcolor : ""} ${"rounded-lg px-4 py-2 shadow-sm duration-200 hover:bg-prof-blue hover:text-white hover:opacity-90"}`}
        >
          Milk Shakes
        </button>
        <button
          onClick={() =>
            categoryChosen === "Pastry"
              ? setCategoryChosen("")
              : setCategoryChosen("Pastry")
          }
          className={`${categoryChosen === "Pastry" ? bgcolor : ""} ${"rounded-lg px-4 py-2 shadow-sm duration-200 hover:bg-prof-blue hover:text-white hover:opacity-90"}`}
        >
          Pastry
        </button>
      </div>
    </div>
  );
}
