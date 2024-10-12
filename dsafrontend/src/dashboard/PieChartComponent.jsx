import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { MdMoreHoriz } from "react-icons/md";
import axios from "axios";
export default function PieChartComponent() {
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

  return (
    <div className="mt-4 rounded-2xl border-2 border-gray-200 p-4 drop-shadow-sm">
      <h1 className="flex font-medium">
        Most Sold type of food
        <MdMoreHoriz className="ml-auto mr-1 mt-1 scale-150" />
      </h1>
      {/* <button onClick={() => console.log(sortedCategory)}> Log</button> */}
      <BarChart
        className="mt-2 translate-x-[-1rem]"
        width={450}
        height={350}
        data={sortedCategory}
      >
        <XAxis dataKey="category" stroke="#3661EB" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          label={{ position: "top" }}
          dataKey="category_count"
          fill="#3661EB"
          barSize={30}
        />
      </BarChart>
    </div>
  );
}
