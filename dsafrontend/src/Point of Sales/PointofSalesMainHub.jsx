import { useFetchProducts } from "../customHooks/useFetchProducts";
import { Products } from "./Products";
import { Search } from "./Search";
import { Cart } from "./Cart";

export default function PointOfSalesMainJub() {
  const { products } = useFetchProducts();

  return (
    <div className="flex h-[90vh]">
      <div className="flex-col overflow-y-hidden">
        <Search />
        <Products products={products} />
      </div>
      <Cart />
    </div>
  );
}
