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
    <div className="mt-12">
      <h1 className="text-[1.5vw] font-bold">Top Products</h1>
      <div className="mt-4 flex-col rounded-lg border-2 border-gray-400">
        <div className="flex w-full flex-1 border-b-2 border-b-gray-400 py-4">
          <h1 className="flex-1 pl-16 font-bold">Product</h1>
          <h1 className="flex-1 pl-8 font-bold">Quantity</h1>
          <h1 className="flex-1 font-bold">Price</h1>
          <h1 className="flex-1 font-bold">Category</h1>
        </div>
        <div className="flex flex-grow">
          <div className="flex flex-grow flex-col p-4 pl-8">
            {sortedArray.slice(0, 10).map((item) => (
              <span key={item.product_id} className="py-4">
                {item.product.product_name}
              </span>
            ))}
          </div>
          <div className="flex flex-grow flex-col p-4 pl-8">
            {sortedArray.slice(0, 10).map((item) => (
              <span key={item.product_id} className="py-4">
                {item.total_quantity}
              </span>
            ))}
          </div>
          <div className="flex flex-grow flex-col p-4 pl-8">
            {sortedArray.slice(0, 10).map((item) => (
              <span key={item.product_id} className="py-4">
                ₱{item.final_price}
              </span>
            ))}
          </div>
          <div className="flex flex-grow flex-col p-4 pl-8">
            {sortedArray.slice(0, 10).map((item) => (
              <span key={item.product_id} className="py-4">
                {item.product.category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
