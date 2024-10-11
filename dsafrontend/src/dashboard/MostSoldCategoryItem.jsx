import axios from "axios";
import { useEffect, useState } from "react";

export default function MostSoldCategoryItem() {
  const [categoryTotal, setcategoryTotal] = useState(0);
  const [sortedCategory, setSortedCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/countedcategory")
      .then((response) => {
        setSortedCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    let count = 0;
    sortedCategory.forEach((item) => {
      count += parseInt(item.category_count);
    });
    setcategoryTotal(count);
  }, [sortedCategory]);

  if (sortedCategory.length === 0 || categoryTotal === 0) {
    // Display a loading message or a placeholder while data is being fetched
    return <div>Loading...</div>; //had to add this due to syncing problems
  }

  return (
    <div className="m-4 my-12 rounded-2xl border-2 border-gray-200 bg-white p-8 drop-shadow-md">
      <h1 className="text-[1.5vw] font-extrabold">
        Sales percentage by Category
      </h1>
      <div className="mt-4 flex gap-x-4">
        <div className="w-1/2 rounded-lg border-2 border-gray-300 bg-white p-4 pl-8 text-left drop-shadow-sm">
          <h3 className="text-[0.9vw] font-bold">
            {sortedCategory[0].category}
          </h3>
          <h1 className="text-prof-blue text-[1.4vw] font-extrabold opacity-80">
            {((sortedCategory[0].category_count / categoryTotal) * 100).toFixed(
              2,
            )}
            %
          </h1>
        </div>
        <div className="w-1/2 rounded-lg border-2 border-gray-300 bg-white p-4 pl-8 text-left drop-shadow-sm">
          <h3 className="text-[0.9vw] font-bold">
            {" "}
            {sortedCategory[1].category}{" "}
          </h3>
          <h1 className="text-prof-blue text-[1.4vw] font-extrabold opacity-80">
            {((sortedCategory[1].category_count / categoryTotal) * 100).toFixed(
              2,
            )}
            %
          </h1>
        </div>
        <div className="w-1/2 rounded-lg border-2 border-gray-300 bg-white p-4 pl-8 text-left drop-shadow-sm">
          <h3 className="text-[0.9vw] font-bold">
            {" "}
            {sortedCategory[2].category}{" "}
          </h3>{" "}
          <h1 className="text-prof-blue text-[1.4vw] font-extrabold opacity-80">
            {((sortedCategory[2].category_count / categoryTotal) * 100).toFixed(
              2,
            )}
            %
          </h1>
        </div>
        <div className="w-1/2 rounded-lg border-2 border-gray-300 bg-white p-4 pl-8 text-left drop-shadow-sm">
          <h3 className="text-[0.9vw] font-bold">
            {" "}
            {sortedCategory[3].category}
          </h3>
          <h1 className="text-prof-blue text-[1.4vw] font-extrabold opacity-80">
            {((sortedCategory[3].category_count / categoryTotal) * 100).toFixed(
              2,
            )}
            %
          </h1>
        </div>
      </div>
    </div>
  );
}
