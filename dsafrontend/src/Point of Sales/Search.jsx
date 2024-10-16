import { CiSearch } from "react-icons/ci";

export function Search() {
  return (
    <div className="flex pt-4">
      <div className="flex rounded-2xl border-2 border-gray-300 px-2 py-1">
        <CiSearch />
        <input
          className="text-[0.8rem] focus:border-none focus:outline-none"
          type="text"
          placeholder=" Search Product"
        />
      </div>
    </div>
  );
}
