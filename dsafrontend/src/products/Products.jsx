// import { useFetchProducts } from "../customHooks/useFetchProducts";
export default function Products({ products }) {
  // const { products } = useFetchProducts();
  return (
    <div className="mt-4">
      <h1 className="text-[2.2vw] font-medium">Products</h1>
      <div className="flex flex-grow">
        <div className="flex flex-grow flex-col p-4 pl-8">
          <h1>Item Name</h1>
          {products.map((item) => (
            <div className="flex items-center">
              <img
                src={item.img_url}
                class="mr-1 h-8 w-8 rounded-md object-cover"
              />
              <h1
                key={item.product_id}
                className="flex whitespace-nowrap py-4 text-[1vw]"
              >
                {item.product_name}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-grow flex-col p-4 pl-8">
          <h1>Description</h1>
          {products.map((item) => (
            <span
              key={item.product_id}
              className="whitespace-nowrap py-4 text-[1vw]"
            >
              {item.desc}
            </span>
          ))}
        </div>
        <div className="flex flex-grow flex-col p-4 pl-8">
          <h1>Price</h1>
          {products.map((item) => (
            <span key={item.product_id} className="py-4 text-[1vw]">
              ₱{item.product_price}
            </span>
          ))}
        </div>
        <div className="flex flex-grow flex-col p-4 pl-8">
          <h1>Stocks</h1>
          {products.map((item) => (
            <span key={item.product_id} className="py-4 text-[1vw]">
              {item.stocks}
            </span>
          ))}
        </div>
        <div className="flex flex-grow flex-col p-4 pl-8">
          <h1>Category</h1>
          {products.map((item) => (
            <span
              key={item.product_id}
              className="whitespace-nowrap py-4 text-[1vw]"
            >
              {item.category}
            </span>
          ))}
        </div>
        <div className="flex-grow flex-col p-4 pl-8">
          <h1 className="whitespace-nowrap">Edit Product</h1>
          {products.map((product) => (
            <div className="flex py-2" key={[product.id]}>
              <button className="rounded-md bg-prof-blue px-4 py-2 text-[1vw] text-white">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mr-4 bg-red-200"></div>
    </div>
  );
}

{
  /* <div className="flex w-5/6 flex-1 border-b-2 border-b-gray-200 bg-red-400 py-4">
          <div className="flex flex-1 bg-blue-900">
            <h1 className="flex-1">Product</h1>
            <h1 className="flex-1">Description</h1>
          </div>
          <div className="flex bg-red-100">
            <h1 className="flex-1">Price</h1>
            <h1 className="flex-1">Stocks</h1>
            <h1 className="flex-1">Category</h1>
          </div>
        </div>
        <div className="flex">
          <div className="flex-grow flex-col">
            {products.map((product) => (
              <div className="flex gap-x-4 p-4" key={[product.id]}>
                <img className="h-8 w-8" src={product.img_url} />
                <h2 className="text-left">{product.product_name}</h2>
              </div>
            ))}
          </div>
          <div className="flex-grow flex-col">
            {products.map((product) => (
              <div className="flex p-4 py-5" key={[product.id]}>
                <h2 className="text-left">{product.desc}</h2>
              </div>
            ))}
          </div>
          <div className="flex-grow flex-col">
            {products.map((product) => (
              <div className="flex p-4 py-5" key={[product.id]}>
                <h2 className="text-left">₱{product.product_price}</h2>
              </div>
            ))}
          </div>
          <div className="flex-grow flex-col">
            {products.map((product) => (
              <div className="flex p-4 py-5" key={[product.id]}>
                <h2 className="text-left">{product.stocks}</h2>
              </div>
            ))}
          </div>
          <div className="flex-grow flex-col">
            {products.map((product) => (
              <div className="flex p-4 py-5" key={[product.id]}>
                <h2 className="text-left">{product.category}</h2>
              </div>
            ))}
          </div>
          <div className="flex-grow flex-col">
            {products.map((product) => (
              <div className="flex p-4 py-3" key={[product.id]}>
                <button className="text- rounded-md bg-prof-blue px-4 py-2">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div> */
}
