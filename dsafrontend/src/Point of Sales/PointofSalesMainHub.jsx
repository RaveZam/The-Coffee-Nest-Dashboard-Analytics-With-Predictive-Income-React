import { useFetchProducts } from "../customHooks/useFetchProducts";

export default function PointOfSalesMainJub() {
  const { products } = useFetchProducts();

  return (
    <>
      <div className="flex gap-4">
        {products.map((product) => (
          <div key={product.id} className="w-1/6 bg-gray-500">
            <h1>{product.product_name} </h1>
            <img src={product.img_url} alt="" />
            <span>Stocks{product.stock}</span>
            <span>{product.product_price}</span>
          </div>
        ))}
      </div>
      <button onClick={() => console.log(products)}> Log Array </button>
    </>
  );
}
