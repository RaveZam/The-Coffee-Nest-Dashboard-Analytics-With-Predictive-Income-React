import { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import Products from "../products/Products";
import BouncingCircles from "../preloaders/BouncingCircles";

export default function Contentarea({ navigate }) {
  const [isloading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [componentopacity, setcomponentOpacity] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 800);
  }, []);
  function renderContent() {
    switch (navigate) {
      case "Dashboard":
        return <Dashboard />;
      case "Products":
        return <Products />;
      default:
        return <Dashboard />;
    }
  }
  return (
    <div className="w-full mt-4 mr-8 z-10">
      {isloading ? (
        <div
          style={{
            opacity: opacity,
            transition: "all 0.2s ease-in-out",
          }}
        >
          <BouncingCircles />
        </div>
      ) : (
        <div
          style={{
            opacity: componentopacity,
            transition: "all 0.2s ease-in-out",
          }}
        >
          {renderContent()}
        </div>
      )}
    </div>
  );
}
