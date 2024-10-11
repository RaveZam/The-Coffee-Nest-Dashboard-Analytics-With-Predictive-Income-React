import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
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
    <div className="mt-8">
      <h1 className="font-bold">Most Famous Category of Foods</h1>
      {/* <button onClick={() => console.log(sortedCategory)}> Log</button> */}
      <BarChart className="mt-2" width={450} height={350} data={sortedCategory}>
        <XAxis dataKey="category" stroke="#4789F6" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          label={{ position: "top" }}
          dataKey="category_count"
          fill="#4789F6"
          barSize={30}
        />
      </BarChart>
    </div>
  );
}
