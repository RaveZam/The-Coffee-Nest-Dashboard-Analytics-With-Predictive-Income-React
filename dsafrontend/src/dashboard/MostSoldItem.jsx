import axios from "axios";
import { useEffect, useState } from "react";
export default function MostSoldItem() {
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

  return (
    <div className="mt-4">
      <h1 className="font-extrabold text-[1.5vw]">Most Sold Item</h1>

      <div className="border-2 border-gray-300 rounded-lg p-4 mt-4 flex">
        <div className="flex-1">test</div>
        <div className="flex-1">test</div>
        <div className="flex-1">test</div>
        <div className="flex-1">test</div>
      </div>
    </div>
  );
}
