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
      <h1 className="mb-2 font-bold">Items Sold In The Past 28 Days</h1>
      <LineChart
        width={700}
        height={350}
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
