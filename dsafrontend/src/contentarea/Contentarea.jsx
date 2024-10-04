import Dashboard from "../dashboard/Dashboard";
import Products from "../products/Products";

export default function Contentarea({ navigate }) {
  const renderContent = () => {
    switch (navigate) {
      case "Dashboard":
        return <Dashboard />;
      case "Products":
        return <Products />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="bg-red-200">
      <h1>Hello!</h1>
      <div>{renderContent()}</div>
    </div>
  );
}
