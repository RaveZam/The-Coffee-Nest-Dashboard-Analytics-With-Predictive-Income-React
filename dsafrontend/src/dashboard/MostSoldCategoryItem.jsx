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
    <div className="my-12">
      <h1 className="text-[1.5vw] font-extrabold">
        Sales percentage by Category
      </h1>
      <div className="mt-4 flex gap-x-4">
        <div className="w-1/2 rounded-lg border-2 border-gray-300 p-4 pl-12 text-left">
          <h3>{sortedCategory[0].category}</h3>
          <h1 className="text-[1.4vw] font-extrabold">
            {((sortedCategory[0].category_count / categoryTotal) * 100).toFixed(
              2,
            )}
            %
          </h1>
        </div>
        <div className="w-1/2 rounded-lg border-2 border-gray-300 p-4 pl-12 text-left">
          <h3> {sortedCategory[1].category} </h3>
          <h1 className="text-[1.4vw] font-extrabold">
            {((sortedCategory[1].category_count / categoryTotal) * 100).toFixed(
              2,
            )}
            %
          </h1>
        </div>
        <div className="w-1/2 rounded-lg border-2 border-gray-300 p-4 pl-12 text-left">
          <h3> {sortedCategory[2].category} </h3>{" "}
          <h1 className="text-[1.4vw] font-extrabold">
            {((sortedCategory[2].category_count / categoryTotal) * 100).toFixed(
              2,
            )}
            %
          </h1>
        </div>
        <div className="w-1/2 rounded-lg border-2 border-gray-300 p-4 pl-12 text-left">
          <h3> {sortedCategory[3].category}</h3>
          <h1 className="text-[1.4vw] font-extrabold">
            {((sortedCategory[3].category_count / categoryTotal) * 100).toFixed(
              2,
            )}
            %
          </h1>
        </div>
      </div>
      {/* {console.log(categoryTotal) &
        console.log(sortedCategory[2].category_count)} */}
      {console.log(sortedCategory)}
    </div>
  );
}
