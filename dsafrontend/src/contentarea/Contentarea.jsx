import { useEffect, useState, useContext, createContext } from "react";
import Dashboard from "../dashboard/Dashboard";
import Products from "../products/Products";
import BouncingCircles from "../preloaders/BouncingCircles";
import EstimatedIncome from "../Estimated Income/EstimatedIncome";
import PointOfSalesMainJub from "../Point of Sales/PointofSalesMainHub";
import { useFetchProducts } from "../customHooks/useFetchProducts";

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
  const { products, productsLoading } = useFetchProducts();
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderOpacity, setPreloaderOpacity] = useState(1);
  const [contentOpacity, setContentOpacity] = useState(0);
  const { salesPerWeek } = useContext(GlobalDataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPreloaderOpacity(0);
        if (productsLoading) {
        } else {
          setTimeout(() => {
            setIsLoading(false);
            setContentOpacity(1);
          }, 400);
        }
        setTimeout(() => {
          setIsLoading(false);
          setContentOpacity(1);
        }, 400);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []);

  const contentComponents = {
    SalesPoint: <PointOfSalesMainJub products={products} />,
    Dashboard: <Dashboard />,
    Products: <Products products={products} />,
    EstimatedIncome: <EstimatedIncome />,
  };

  function renderContent() {
    return (
      contentComponents[navigate] || <PointOfSalesMainJub products={products} />
    );
  }
  console.log("isLoading:", isLoading, "productsLoading:", productsLoading);

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
