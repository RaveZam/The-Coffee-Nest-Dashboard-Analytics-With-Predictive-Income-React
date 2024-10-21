export default function RenderProducts({
  products,
  showPopup,
  PopUp,
  ProductToEdit,
  setProductToEdit,
}) {
  return (
    <div className="mr-4 flex flex-grow rounded-md border-2 border-gray-200">
      <div className="flex flex-grow flex-col">
        <h1 className="border-b-2 border-gray-200 py-4 pl-4 text-[1vw]">
          Item Name
        </h1>
        {products.slice(0, 2).map((item) => (
          <div
            key={item.product_id}
            className="flex items-center border-b-2 border-gray-200 pl-4"
          >
            <img
              src={item.img_url}
              class="mr-1 h-8 w-8 rounded-md object-cover"
            />
            <h1 className="flex whitespace-nowrap py-4 text-[1vw]">
              {item.product_name}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex flex-grow flex-col">
        <h1 className="border-b-2 border-gray-200 py-4 text-[1vw]">
          Description
        </h1>
        {products.slice(0, 2).map((item) => (
          <span
            key={item.product_id}
            className="whitespace-nowrap border-b-2 border-gray-200 py-4 text-[1vw]"
          >
            {item.desc}
          </span>
        ))}
      </div>
      <div className="flex flex-grow flex-col">
        <h1 className="border-b-2 border-gray-200 py-4 text-[1vw]">Price</h1>
        {products.slice(0, 2).map((item) => (
          <span
            key={item.product_id}
            className="border-b-2 border-gray-200 py-4 text-[1vw]"
          >
            ₱{item.product_price}
          </span>
        ))}
      </div>
      <div className="flex flex-grow flex-col">
        <h1 className="border-b-2 border-gray-200 py-4 text-[1vw]">Stocks</h1>
        {products.slice(0, 2).map((item) => (
          <span
            key={item.product_id}
            className="border-b-2 border-gray-200 py-4 text-[1vw]"
          >
            {item.stocks}
          </span>
        ))}
      </div>
      <div className="flex flex-grow flex-col">
        <h1 className="border-b-2 border-gray-200 py-4 text-[1vw]">Category</h1>
        {products.slice(0, 2).map((item) => (
          <span
            key={item.product_id}
            className="whitespace-nowrap border-b-2 border-gray-200 py-4 text-[1vw]"
          >
            {item.category}
          </span>
        ))}
      </div>
      <div className="flex-grow flex-col">
        <h1 className="whitespace-nowrap border-b-2 border-gray-200 py-4 text-[1vw]">
          Edit Product
        </h1>
        {products.slice(0, 2).map((product) => (
          <div
            className="flex border-b-2 border-gray-200 py-2"
            key={[product.id]}
          >
            <button
              onClick={() => {
                showPopup(!PopUp);
                setProductToEdit([
                  {
                    id: product.id,
                    name: product.product_name,
                    desc: product.desc,
                    price: product.product_price,
                    stocks: product.stocks,
                    category: product.category,
                    image: product.img_url,
                  },
                ]);
              }}
              className="rounded-full bg-prof-blue px-8 py-2 text-[1vw] text-white"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
