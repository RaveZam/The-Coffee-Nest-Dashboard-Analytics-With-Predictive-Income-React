export default function MostSoldCategoryItem() {
  return (
    <div className="mt-4">
      <h1 className="font-extrabold text-[1.5vw]">
        Sales percentage by Category
      </h1>
      <div className="flex mt-8 gap-x-4">
        <div className="p-4 w-1/2 text-left pl-12 border-2 border-gray-300 rounded-lg">
          <h3> Iced Beverage</h3>
          <h1 className="font-extrabold text-[1.4vw]">70%</h1>
        </div>
        <div className="p-4 w-1/2 text-left pl-12 border-2 border-gray-300 rounded-lg">
          <h3> Hot Brew </h3>
          <h1 className="font-extrabold text-[1.4vw]">70%</h1>
        </div>
        <div className="p-4 w-1/2 text-left pl-12 border-2 border-gray-300 rounded-lg">
          <h3> Pastry </h3> <h1 className="font-extrabold text-[1.4vw]">70%</h1>
        </div>
        <div className="p-4 w-1/2 text-left pl-12 border-2 border-gray-300 rounded-lg">
          <h3> Milk Shakes</h3>
          <h1 className="font-extrabold text-[1.4vw]">70%</h1>
        </div>
      </div>
    </div>
  );
}
