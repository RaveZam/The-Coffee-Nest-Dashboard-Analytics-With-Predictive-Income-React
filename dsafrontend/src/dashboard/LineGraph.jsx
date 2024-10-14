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
    <div className="mt-4 h-[400px] w-2/3 translate-x-1 rounded-2xl border-2 border-gray-200 py-4 pl-4 drop-shadow-sm">
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
          <Line type="monotone" dataKey="sold" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
