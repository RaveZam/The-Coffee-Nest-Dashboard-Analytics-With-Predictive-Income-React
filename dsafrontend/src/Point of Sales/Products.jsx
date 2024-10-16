export function Products({ products }) {
  return (
    <>
      <div className="grid h-screen w-full grid-cols-3 gap-8 overflow-y-scroll pb-[10rem] pr-8 will-change-scroll">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full flex-col rounded-lg border-2 border-gray-50 bg-white p-4 shadow-md"
          >
            <div className="h-[13rem] w-full overflow-hidden rounded-2xl bg-red-300 bg-cover bg-center">
              <img
                className="h-full w-full object-cover object-center"
                src={product.img_url}
                loading="lazy"
              />
            </div>
            <h1 className="my-4 text-[1.2vw] font-semibold">
              {product.product_name}
            </h1>
            <span className="text-[0.9vw] text-gray-500">{product.desc}</span>
            <h1 className="mt-4 text-[1.2vw] font-medium">
              ₱{product.product_price}
              <span className="ml-1 text-[0.9vw] text-gray-500">
                Available: {product.stocks}
              </span>
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
