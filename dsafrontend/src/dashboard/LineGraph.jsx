import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
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
        <AreaChart
          className="translate-x-[-1.5rem]"
          data={resultArray}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />

          {/* Area with Full Color */}
          <Area
            type="monotone"
            dataKey="sold"
            stroke="#3661EB" // Line color
            fill="#3661EB" // Fill color for the area
            strokeWidth={1.2}
            opacity={1} // Fully opaque
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
