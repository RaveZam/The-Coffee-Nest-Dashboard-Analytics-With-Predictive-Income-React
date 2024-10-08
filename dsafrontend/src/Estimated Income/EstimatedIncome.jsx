import axios from "axios";
import { space } from "postcss/lib/list";
import { useEffect, useState } from "react";

export default function EstimatedIncome() {
  const [salesPerDay, setsalesPerDay] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/totalpriceperday")
      .then((response) => {
        setsalesPerDay(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let weeks = [0, 0, 0, 0];
  salesPerDay.forEach((item) => {
    const date = new Date(item.sale_date);
    const weekIndex = Math.floor(date.getDate() / 7);
    weeks[weekIndex] += parseFloat(item.final_price);
  });

  weeks.splice(0, 4).forEach((total, index) => {
    console.log(`Total sales for Week ${index + 1}: PHP ${total.toFixed(2)}`);
  });

  return (
    <div>
      <h1 className="font-semibold">Estimated Next Month's Income</h1>
      <div className="mt-12">
        <span className="font-semibold">
          Test Area for Dumping and Rendering Arrays
        </span>
        <div className="h-120 m-4 flex flex-col rounded-lg bg-gray-200 p-4">
          <h1>Data:</h1>
        </div>
        <button
          onClick={() => calculateWeekly()}
          className="ml-4 rounded-lg border-2 p-2 duration-300 hover:bg-gray-100"
        >
          Log Array im tired ill do this tommorow log
        </button>
        <button
          className="ml-4 rounded-lg border-2 p-2 duration-300 hover:bg-gray-100"
          onClick={() => console.log(weeks)}
        >
          Log ResultArray
        </button>
      </div>
    </div>
  );
}

//   const salesByDate = salesPerDay.reduce((acc, sale) => {
//     const date = sale.sale_date;
//     const totalitems = parseFloat(sale.quantity);
//     if (!acc[date]) {
//       acc[date] = { date, sold: 0 };
//     }
//     acc[date].sold += totalitems;

//     return acc;
//   }, []);
//   const resultArray = Object.values(salesByDate);
