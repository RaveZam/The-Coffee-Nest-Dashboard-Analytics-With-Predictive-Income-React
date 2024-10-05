import { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import Products from "../products/Products";
import BouncingCircles from "../preloaders/BouncingCircles";

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
