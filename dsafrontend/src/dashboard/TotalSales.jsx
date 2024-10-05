export default function TotalSales({ grosssales, itemsSold }) {
  return (
    <div className="mb-12">
      <h1 className="text-[2.5vw] font-bold">Dashboard</h1>
      <span className="text-gray-600 mt-4">Last 28 Days</span>
      <h3 className="my-4 font-extrabold">Total Sales</h3>
      <div className="flex gap-4">
        <div className="flex-grow p-4 border-solid border-2 border-gray-300 rounded-lg">
          <h2 className="font-medium text-gray-700">Gross Sales</h2>
          <h1 className="font-bold text-[1.5vw]">₱{grosssales}</h1>
        </div>
        <div className="flex-grow p-4 border-solid border-2 border-gray-300 rounded-lg">
          <h2 className="font-medium text-gray-700">Items Sold</h2>
          <h1 className="font-bold text-[1.5vw]">{itemsSold}</h1>
        </div>
      </div>
    </div>
  );
}
