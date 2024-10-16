import { useEffect, useState, useContext, createContext } from "react";
import Dashboard from "../dashboard/Dashboard";
import Products from "../products/Products";
import BouncingCircles from "../preloaders/BouncingCircles";
import EstimatedIncome from "../Estimated Income/EstimatedIncome";
import PointOfSalesMainJub from "../Point of Sales/PointofSalesMainHub";

export const GlobalDataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
  const [AverageWeeklySales, setAverageWeeklySales] = useState(0);
  const [salesPerWeek, setSalesPerWeek] = useState([0, 0, 0, 0]);
  const [lastMonthSalesPerWeek, setLastMonthSalesPerWeek] = useState([
    0, 0, 0, 0,
  ]);

  return (
    <GlobalDataContext.Provider
      value={{
        AverageWeeklySales,
        setAverageWeeklySales,
        salesPerWeek,
        setSalesPerWeek,
        lastMonthSalesPerWeek,
        setLastMonthSalesPerWeek,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export default function Contentarea({ navigate }) {
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderOpacity, setPreloaderOpacity] = useState(1);
  const [contentOpacity, setContentOpacity] = useState(0);
  const { salesPerWeek } = useContext(GlobalDataContext);

  useEffect(() => {
    setTimeout(() => {
      setPreloaderOpacity(0);
    }, 1000);

    setTimeout(() => {
      setIsLoading(false);
      setContentOpacity(1);
    }, 2000);
  }, []);

  const contentComponents = {
    SalesPoint: <PointOfSalesMainJub />,
    Dashboard: <Dashboard />,
    Products: <Products />,
    EstimatedIncome: <EstimatedIncome />,
  };

  function renderContent() {
    return contentComponents[navigate] || <PointOfSalesMainJub />;
  }

  return (
    <div className="h-[90vh] w-full overflow-y-scroll scroll-smooth will-change-scroll">
      {isLoading ? (
        <div
          style={{
            opacity: preloaderOpacity,
            transition: "opacity 0.4s ease-out",
          }}
        >
          <BouncingCircles />
        </div>
      ) : (
        <div
          style={{
            opacity: contentOpacity,
            transition: "opacity 0.4s ease-in-out",
          }}
        >
          {renderContent()}
        </div>
      )}
    </div>
  );
}
//   function renderContent() {
//     switch (navigate) {
//       case "SalesPoint":
//         return <PointOfSalesMainJub />;
//       case "Dashboard":
//         return <Dashboard />;
//       case "Products":
//         return <Products />;
//       case "EstimatedIncome":
//         return <EstimatedIncome />;
//       default:
//         return <Dashboard />;
//     }
//   }
//   return (
//     <div className="h-[90vh] w-full overflow-y-scroll scroll-smooth pr-8 will-change-scroll">
//       {isLoading ? (
//         <div
//           style={{
//             opacity: preloaderOpacity,
//             transition: "opacity 0.4s ease-out",
//           }}
//         >
//           <BouncingCircles />
//         </div>
//       ) : (
//         <div
//           style={{
//             opacity: contentOpacity,
//             transition: "opacity 0.4s ease-in-out",
//           }}
//         >
//           {renderContent()}
//         </div>
//       )}
//       {/* {renderContent()} */}
//     </div>
//   );
// }
