import { Products } from "./Products";
import { Search } from "./Search";
import { Cart } from "./Cart";
import { useState } from "react";

export default function PointOfSalesMainJub({ products }) {
  const [cart, setCart] = useState([]);

  return (
    <div className="flex h-[90vh]">
      <div className="flex-col overflow-y-hidden">
        <Search />
        <Products setCart={setCart} cart={cart} products={products} />
      </div>
      <Cart setCart={setCart} cart={cart} />
    </div>
  );
}
