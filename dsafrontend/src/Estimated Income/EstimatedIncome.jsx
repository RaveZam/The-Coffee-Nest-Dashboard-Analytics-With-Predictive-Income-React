import axios from "axios";
import { space } from "postcss/lib/list";
import { useEffect, useState } from "react";

export default function EstimatedIncome() {
  const [salesHistory, setSalesHistory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sales")
      .then((response) => {
        setSalesHistory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const salesByDate = salesHistory.reduce((acc, sale) => {
    const date = sale.sale_date;
    const totalitems = parseFloat(sale.quantity);
    if (!acc[date]) {
      acc[date] = { date, sold: 0 };
    }
    acc[date].sold += totalitems;

    return acc;
  }, []);

  const resultArray = Object.values(salesByDate);
  const filledSalesHistory = resultArray.map((date, index) => {
    return date.date ? date.date : { date: `2024-10-${index + 1},`, sold: 0 };
  });
  return (
    <div>
      <h1 className="font-semibold">Estimated Next Month's Income</h1>
      <div className="mt-12">
        <span className="font-semibold">
          Test Area for Dumping and Rendering Arrays
        </span>

        <button
          onClick={() => console.log(filledSalesHistory)}
          className="ml-4 rounded-lg border-2 p-2 duration-300 hover:bg-gray-100"
        >
          Log Array im tired ill do this tommorow
        </button>
      </div>
    </div>
  );
}
