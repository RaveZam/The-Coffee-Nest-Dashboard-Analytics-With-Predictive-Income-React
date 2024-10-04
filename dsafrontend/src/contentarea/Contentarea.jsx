import Dashboard from "../dashboard/Dashboard";
import Products from "../products/Products";

export default function Contentarea({ navigate }) {
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
    <div className="w-full mt-4 mr-8">
      <div>{renderContent()}</div>
    </div>
  );
}
