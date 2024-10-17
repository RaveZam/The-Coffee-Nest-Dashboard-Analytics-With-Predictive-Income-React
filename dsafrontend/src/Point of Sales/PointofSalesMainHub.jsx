import { useFetchProducts } from "../customHooks/useFetchProducts";
import { Products } from "./Products";
import { Search } from "./Search";
import { Cart } from "./Cart";
import { useState } from "react";

export default function PointOfSalesMainJub() {
  const { products } = useFetchProducts();
  const [cart, setCart] = useState([{ id: "" }]);

  return (
    <div className="flex h-[90vh]">
      <button onClick={() => console.log(cart)}>Array</button>
      <div className="flex-col overflow-y-hidden">
        <Search />
        <Products setCart={setCart} cart={cart} products={products} />
      </div>
      <Cart cart={cart} />
    </div>
  );
}
