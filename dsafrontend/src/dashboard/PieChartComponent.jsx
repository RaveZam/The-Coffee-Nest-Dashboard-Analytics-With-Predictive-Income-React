import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
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
  useEffect(() => {
    console.log(sortedCategory);
  });

  const CustomBarShape = (props) => {
    const { fill, x, y, width, height } = props;

    // Calculate the corner radius
    const radius = 5; // Adjust this value as needed

    return (
      <path
        d={`M${x + radius},${y} 
           H${x + width - radius} 
           Q${x + width},${y},${x + width},${y + radius} 
           V${y + height} 
           H${x} 
           V${y + radius} 
           Q${x},${y},${x + radius},${y}`} // Create a rounded top shape
        fill={fill}
      />
    );
  };
  return (
    <div className="mt-4 h-[400px] w-[70vh] rounded-2xl border-2 border-gray-200 p-4">
      <h1 className="flex font-medium">
        Most Sold type of food
        <MdMoreHoriz className="ml-auto mr-1 mt-1 scale-150" />
      </h1>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="pb-8 text-[0.9vw]"
      >
        <BarChart className="mt-2 translate-x-[-1rem]" data={sortedCategory}>
          <XAxis dataKey="category" stroke="#3661EB" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Bar
            label={{ position: "top" }}
            dataKey="category_count"
            fill="#3661EB"
            barSize={40}
            shape={<CustomBarShape />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
