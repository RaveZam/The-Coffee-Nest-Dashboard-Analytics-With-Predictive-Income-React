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
    <div className="ml-4">
      <h1 className="mb-4 font-bold text-[1.5vw]">Sales Over Time</h1>
      <LineChart
        width={1100}
        height={500}
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
