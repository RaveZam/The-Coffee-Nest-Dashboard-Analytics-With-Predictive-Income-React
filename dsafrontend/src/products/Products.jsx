import RenderProducts from "./RenderProducts";
import EditPopUp from "./EditPopUp";

export default function Products({ products }) {
  return (
    <div className="mt-4 h-full w-full">
      <EditPopUp />
      <h1 className="text-[2.2vw] font-medium">Products</h1>
      <RenderProducts products={products} />
    </div>
  );
}
