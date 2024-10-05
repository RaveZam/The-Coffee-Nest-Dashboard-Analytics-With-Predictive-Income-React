import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const url = "http://localhost:8000/api/sales";
  const [salesTable, setsalesTable] = useState([]);
  const [itemsSold, setItemsSold] = useState(0);
  const [netsales, setNetSales] = useState(0);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setsalesTable(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // On Effect Load All Dynamic Variables
  useEffect(() => {
    salesTable.forEach((sale) => {
      let counter = 0;
      counter += sale.total_price;
    });
  }, []);

  const netSales = 1200;
  const grossSales = 1600;
  function countQuantity() {
    let counter = 0;
    salesTable.forEach((sale) => {
      counter += sale.quantity;
      setItemsSold(counter);
    });
  }
  return (
    <div>
      <h1 className="text-[2.5vw] font-bold">Dashboard</h1>
      <span className="text-gray-600 mt-4">Last 30 Days</span>
      <h3 className="mt-4 mb-4 font-bold">Total Sales</h3>
      <div className="flex gap-4">
        <div className="flex-grow p-4 border-solid border-2 border-gray-300 rounded-lg">
          <h2 className="font-medium text-gray-700">Net Sales</h2>
          <h1 className="font-bold text-[1.5vw]">₱{netSales}</h1>
        </div>
        <div className="flex-grow p-4 border-solid border-2 border-gray-300 rounded-lg">
          <h2 className="font-medium text-gray-700">Gross Sales</h2>
          <h1 className="font-bold text-[1.5vw]">₱{grossSales}</h1>
        </div>
      </div>
      <div>random dump area for testing:</div>
      <button onClick={() => countQuantity()}>Log Table</button>
    </div>
  );
}
