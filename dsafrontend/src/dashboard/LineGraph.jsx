import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function LineGraph({ resultArray }) {
  return (
    <div className="mt-8">
      <h1 className="mb-2 text-[1.1vw] font-bold">Sales In The Past 28 Days</h1>
      <LineChart
        width={1100}
        height={400}
        data={resultArray}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="sold" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}
