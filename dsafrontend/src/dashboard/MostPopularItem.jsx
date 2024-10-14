import axios from "axios";
import { FaMedal } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

import { useState, useEffect } from "react";
export default function MostPopularItem() {
  const [sortedArray, setSortedArray] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sortedsales")
      .then((response) => {
        setSortedArray(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (sortedArray.length === 0) {
    // Display a loading message or a placeholder while data is being fetched
    return <div>Loading...</div>; //had to add this due to syncing problems
  }
  return (
    <div className="rounded-2xl border-2 p-4">
      <div className="flex">
        <h1 className="font-medium">Most Popular Item</h1>
        <MdOutlineInfo className="ml-auto flex scale-100 opacity-60" />
      </div>

      <div className="mt-4 flex gap-4">
        <div className="h- w-2/4 whitespace-nowrap rounded-2xl border-2 border-gray-200 p-4 text-[0.8vw]">
          <h1 className="flex">
            <h1 className="flex font-semibold">1st</h1>
            <FaMedal className="mx-1 mt-1 text-yellow-400" />
            {sortedArray[0].product.product_name}
          </h1>
        </div>
        <div className="h- w-2/4 whitespace-nowrap rounded-2xl border-2 border-gray-200 p-4 text-[0.8vw]">
          <h1 className="flex">
            <h1 className="mr-1 flex font-semibold">2nd</h1>
            <FaMedal className="mx-1 mt-1 text-gray-400" />
            {sortedArray[1].product.product_name}
          </h1>
        </div>
        <div className="h- w-2/4 whitespace-nowrap rounded-2xl border-2 border-gray-200 p-4 text-[0.8vw]">
          <h1 className="flex">
            <h1 className="mr-1 flex font-semibold">3rd</h1>
            <FaMedal className="mx-1 mt-1 text-amber-900" />
            {sortedArray[2].product.product_name}
          </h1>
        </div>
      </div>
    </div>
  );
}
