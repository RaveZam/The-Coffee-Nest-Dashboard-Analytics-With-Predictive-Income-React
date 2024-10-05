import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
// import { VictoryChart, VictoryTheme, VictoryLine } from "victory";

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

  const salesByDate = salesTable.reduce((acc, sale) => {
    const date = sale.sale_date;
    const totalitems = parseFloat(sale.quantity);

    if (!acc[date]) {
      acc[date] = { date, sold: 0 };
    }
    acc[date].sold += totalitems;

    return acc;
  }, []);

  const resultArray = Object.values(salesByDate);

  return (
    <div>
      <h1 className="text-[2.5vw] font-bold">Dashboard</h1>
      <span className="text-gray-600 mt-4">Last 28 Days</span>
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
      <div className="mt-8 ">
        <h1 className="mb-4 font-bold text-[1.5vw]">Sales Over Time</h1>
        <LineChart
          width={1100}
          height={500}
          data={resultArray}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="sold" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <button onClick={() => console.log(salesTable)}>Log Table</button>
    </div>
  );
}

//ctrl alt L for turbo console.log
