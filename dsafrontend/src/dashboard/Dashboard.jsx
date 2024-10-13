import { useEffect, useState } from "react";
import axios from "axios";
import MostSoldItem from "./MostSoldItem";
import MostSoldCategoryItem from "./MostSoldCategoryItem";
import LineGraph from "./LineGraph";
import TotalSales from "./TotalSales";
import PieChartComponent from "./PieChartComponent";
import MostPopularItem from "./MostPopularItem";
import Lastmonth from "./Lastmonth";

export default function Dashboard() {
  const url = "http://localhost:8000/api/sales";
  const [salesTable, setsalesTable] = useState([]);
  const [itemsSold, setItemsSold] = useState(0);
  const [grosssales, setGrossSales] = useState(0.0);
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

  const [sortedCategory, setSortedCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/countedcategory")
      .then((response) => {
        setSortedCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // total price counter
  useEffect(() => {
    let grossCounter = 0;
    salesTable.forEach((sale) => {
      const price = parseInt(sale.total_price);
      grossCounter += price;
      setGrossSales(grossCounter);
    });

    let totalQuantityCounter = 0;
    salesTable.forEach((sale) => {
      totalQuantityCounter += sale.quantity;
      setItemsSold(totalQuantityCounter);
    });
  }, [salesTable]);

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

  // Fetch Previous Months Data.
  const [lastMonthGross, setLastMonthGross] = useState(); //Last Month Gross Sales
  const [lastMonthTotalSales, setLastMonthTotalSales] = useState(); // Last Month Total Quanity
  const [previousMonth, setPreviousMonths] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/previousmonthsales")
      .then((response) => {
        setPreviousMonths(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(previousMonth);
  }, []);

  // Compute Total Gross And Total Quantity of Previous Month
  useEffect(() => {
    let grossCounter = 0;
    let totalItemCounter = 0;
    previousMonth.forEach((item) => {
      grossCounter += parseInt(item.final_price);
      totalItemCounter += parseInt(item.final_quantity);
      setLastMonthTotalSales(totalItemCounter);
      setLastMonthGross(grossCounter);
    });
  }, []);

  return (
    <div>
      <div>
        <TotalSales
          lastMonthGross={lastMonthGross}
          lastMonthTotalSales={lastMonthTotalSales}
          grosssales={grosssales}
          itemsSold={itemsSold}
        />
      </div>
      <div className="flex gap-4">
        <LineGraph resultArray={resultArray} />
        <PieChartComponent />
      </div>
      <MostSoldItem />
      <MostSoldCategoryItem />
    </div>
  );
}
