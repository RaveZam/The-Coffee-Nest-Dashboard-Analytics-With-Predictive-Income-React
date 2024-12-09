import { Products } from "./Products";
import { Search } from "./Search";
import { Cart } from "./Cart";
import { useState } from "react";

export default function PointOfSalesMainJub({ products }) {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-[90vh]">
      <div className="w-[70%] overflow-y-hidden">
        <Search search={search} setSearch={setSearch} />
        <Products
          search={search}
          setCart={setCart}
          cart={cart}
          products={products}
        />
      </div>
      <div className="w-[25vw]">
        <Cart setCart={setCart} cart={cart} />
      </div>
    </div>
  );
}
