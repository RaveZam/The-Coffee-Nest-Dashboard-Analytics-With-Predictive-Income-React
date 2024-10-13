import { useEffect, useState } from "react";
import Dashboard, { GrossSalesProvider } from "../dashboard/Dashboard";
import Products from "../products/Products";
import BouncingCircles from "../preloaders/BouncingCircles";
import EstimatedIncome from "../Estimated Income/EstimatedIncome";

export default function Contentarea({ navigate }) {
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderOpacity, setPreloaderOpacity] = useState(1);
  const [contentOpacity, setContentOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPreloaderOpacity(0);
    }, 1000);

    setTimeout(() => {
      setIsLoading(false);
      setContentOpacity(1);
    }, 2000);
  }, []);

  function renderContent() {
    return (
      <GrossSalesProvider>
        {(() => {
          switch (navigate) {
            case "Dashboard":
              return <Dashboard />;
            case "Products":
              return <Products />;
            case "EstimatedIncome":
              return <EstimatedIncome />;
            default:
              return <Dashboard />;
          }
        })()}
      </GrossSalesProvider>
    );
  }

  return (
    <div className="z-10 mr-4 mt-4 w-full">
      {/* {isLoading ? (
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
      )} */}
      {renderContent()}
    </div>
  );
}
