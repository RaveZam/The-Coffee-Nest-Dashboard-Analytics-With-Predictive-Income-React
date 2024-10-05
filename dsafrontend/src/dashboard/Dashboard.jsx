import { useEffect, useState } from "react";
import axios from "axios";
import MostSoldItem from "./MostSoldItem";
import MostSoldCategoryItem from "./MostSoldCategoryItem";
import LineGraph from "./LineGraph";
import TotalSales from "./TotalSales";
// import { VictoryChart, VictoryTheme, VictoryLine } from "victory";

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
  // On Effect Load All Dynamic Variables

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

  return (
    <>
      <TotalSales grosssales={grosssales} itemsSold={itemsSold} />
      <LineGraph resultArray={resultArray} />
      <MostSoldItem />
      <MostSoldCategoryItem />
    </>
  );
}

//ctrl alt L for turbo console.log
