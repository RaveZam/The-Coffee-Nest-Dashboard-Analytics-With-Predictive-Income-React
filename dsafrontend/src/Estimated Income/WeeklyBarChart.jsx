import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function WeeklyBarChart({ salesPerWeek }) {
  const data = [
    { week: "Week 1 Sales", GrossSales: salesPerWeek[0] },
    { week: "Week 2 Sales", GrossSales: salesPerWeek[1] },
    { week: "Week 3 Sales", GrossSales: salesPerWeek[2] },
    { week: "Week 4 Sales", GrossSales: salesPerWeek[3] },
  ];
  const formatCurrency = (value) => `₱${value.toLocaleString()}`;
  return (
    <div className="mt-4 rounded-2xl border-2 border-gray-200 bg-white px-4 py-4 pr-8 drop-shadow-md">
      <h3 className="mb-4 font-medium text-gray-700">
        Sales Per Week Bar Chart
      </h3>

      <BarChart
        margin={{ top: 30, right: 20, bottom: 5, left: 0 }}
        width={600}
        height={300}
        data={data}
      >
        <XAxis dataKey="week" stroke="#4789F6" />
        <YAxis tickFormatter={formatCurrency} />
        <Tooltip formatter={(value) => formatCurrency(value)} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          label={{ position: "top", formatter: formatCurrency }}
          dataKey="GrossSales"
          fill="#3661EB"
          barSize={30}
        />
      </BarChart>
    </div>
  );
}
