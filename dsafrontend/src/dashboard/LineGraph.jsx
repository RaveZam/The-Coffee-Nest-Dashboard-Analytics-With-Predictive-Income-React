import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MdMoreHoriz } from "react-icons/md";

export default function LineGraph({ resultArray }) {
  return (
    <div className="mt-4 h-[400px] w-2/3 translate-x-1 rounded-2xl border-2 border-gray-200 py-4 pl-4">
      <h1 className="mb-2 flex font-medium text-gray-600">
        Items Sold In The Past 28 Days
        <MdMoreHoriz className="ml-auto mr-6 mt-1 scale-150" />
      </h1>
      <ResponsiveContainer width="100%" height="100%" className="pb-8">
        <LineChart
          className="translate-x-[-1.5rem]"
          data={resultArray}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type="line"
            dataKey="sold"
            stroke="#3661EB"
            strokeWidth={2}
            activeDot={{ strokeWidth: 2, r: 10 }}
          />

          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
