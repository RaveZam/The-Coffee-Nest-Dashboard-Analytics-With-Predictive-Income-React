import RenderProducts from "./RenderProducts";
import EditPopUp from "./EditPopUp";
import AddProduct from "./AddProduct";
import { useState } from "react";

export default function Products({ products }) {
  const [PopUp, showPopup] = useState(false);
  const [ProductToEdit, setProductToEdit] = useState();
  const [Addproduct, showAddproduct] = useState(false);

  return (
    <div className="mt-4 h-full w-full">
      {PopUp && (
        <EditPopUp
          ProductToEdit={ProductToEdit}
          setProductToEdit={setProductToEdit}
          showPopup={showPopup}
        />
      )}
      {Addproduct && <AddProduct showAddproduct={showAddproduct} />}
      <div className="flex">
        <h1 className="text-[2.2vw] font-medium">Products</h1>
        <div className="ml-auto">
          <button
            onClick={() => showAddproduct(true)}
            className="mr-4 rounded-full bg-blue-600 px-8 py-2 text-[0.9vw] text-white"
          >
            <h1 className="font-medium"> Add Product</h1>
          </button>
        </div>
      </div>

      <RenderProducts
        ProductToEdit={ProductToEdit}
        setProductToEdit={setProductToEdit}
        showPopup={showPopup}
        PopUp={PopUp}
        products={products}
      />
    </div>
  );
}
