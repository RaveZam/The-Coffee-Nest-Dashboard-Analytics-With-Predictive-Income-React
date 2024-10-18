import { IoCartOutline } from "react-icons/io5";
import React from "react";

export const Products = React.memo(({ products, cart, setCart }) => {
  const addToCart = (product) => {
    const isProductInCart = cart.find((item) => item.id === product.id);
    const newStockValue = product.stocks - 1;
    if (isProductInCart) {
      alert("Item is Already in Cart");
    } else {
      setCart((prevcart) => [
        ...prevcart,
        {
          id: product.id,
          product_name: product.product_name,
          product_img_url: product.img_url,
          price: product.product_price,
          stocks: product.stocks,
          quantity: 1,
          newStocks: newStockValue,
        },
      ]);
    }
  };

  return (
    <div className="grid h-screen w-full grid-cols-3 gap-8 overflow-y-scroll pb-[17rem] pr-8 will-change-scroll">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full flex-col rounded-lg border-2 border-gray-50 bg-white p-4 shadow-md will-change-scroll"
        >
          <div className="relative h-[13rem] w-full overflow-hidden rounded-2xl bg-red-300 bg-cover bg-center">
            <img
              className="z-10 h-full w-full object-cover object-center"
              src={product.img_url}
              loading="lazy"
            />
            <button
              onClick={() => addToCart(product)}
              className="absolute right-4 top-4 z-30"
            >
              <div className="scale-125 rounded-md bg-gray-100 p-2 opacity-80">
                <IoCartOutline />
              </div>
            </button>
          </div>

          <h1 className="my-4 text-[1.2vw] font-semibold">
            {product.product_name}
          </h1>
          <span className="text-[0.9vw] text-gray-500">{product.desc}</span>
          <div className="flex">
            <h1 className="mt-4 text-[1.2vw] font-medium">
              ₱{product.product_price}
              <span className="ml-1 text-[0.9vw] text-gray-500">
                Available: {product.stocks}
              </span>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
});
