import { IoCartOutline } from "react-icons/io5";
import React from "react";

export const Products = React.memo(({ products, cart, setCart, search }) => {
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

  const filteredItems = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="h-screen overflow-x-hidden overflow-y-scroll pb-[17rem] pr-8 will-change-scroll">
      <div className="grid grid-cols-3 gap-8 overflow-x-hidden">
        {filteredItems.length > 0 ? (
          filteredItems.map((product) => (
            <div
              key={product.id}
              className="flex-col rounded-lg border-2 border-gray-50 bg-white p-4 shadow-md will-change-scroll"
            >
              {/* Product Image */}
              <div className="relative h-[13rem] w-full overflow-hidden rounded-2xl bg-cover bg-center">
                <img
                  className="z-10 h-full w-full object-cover object-center"
                  src={product.img_url}
                  loading="lazy"
                  alt={product.product_name}
                />
                <button
                  disabled={product.stocks <= 0}
                  onClick={() => addToCart(product)}
                  className="absolute right-4 top-4 z-30"
                >
                  <div className="scale-125 rounded-md bg-gray-100 p-2 opacity-80">
                    <IoCartOutline />
                  </div>
                </button>
              </div>

              {/* Product Details */}
              <h1 className="my-4 text-[1.2vw] font-semibold">
                {product.product_name}
              </h1>
              <span className="text-[0.9vw] text-gray-500">{product.desc}</span>

              <div className="flex">
                <h1 className="mt-4 text-[1.2vw] font-medium">
                  ₱{product.product_price}
                  <span className="ml-1 text-[0.9vw] text-gray-500">
                    {product.stocks <= 0
                      ? "Out of Stock"
                      : `Available: ${product.stocks}`}
                  </span>
                </h1>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-left text-gray-500">
            <span>No items found.</span>
          </div>
        )}
      </div>
    </div>
  );
});
