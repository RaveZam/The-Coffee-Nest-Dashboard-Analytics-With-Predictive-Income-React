export default function TotalSales({ grosssales, itemsSold }) {
  return (
    <div className="mb-12">
      <h1 className="text-[2.2vw] font-bold">Dashboard</h1>
      <span className="mt-4 text-gray-600">Last 28 Days</span>
      <h3 className="my-4 font-extrabold">Total Sales</h3>
      <div className="flex gap-4">
        <div className="flex-grow rounded-lg border-2 border-solid border-gray-300 bg-white p-4 drop-shadow-md">
          <h2 className="font-medium text-gray-700">Gross Sales</h2>
          <h1 className="text-[1.3vw] font-bold">₱{grosssales}</h1>
        </div>
        <div className="flex-grow rounded-lg border-2 border-solid border-gray-300 bg-white p-4 drop-shadow-md">
          <h2 className="font-medium text-gray-700">Items Sold</h2>
          <h1 className="text-[1.3vw] font-bold">{itemsSold}</h1>
        </div>
      </div>
    </div>
  );
}
