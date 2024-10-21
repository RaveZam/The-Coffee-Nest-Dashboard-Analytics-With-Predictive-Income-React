import RenderProducts from "./RenderProducts";
import EditPopUp from "./EditPopUp";
import { useState } from "react";

export default function Products({ products }) {
  const [PopUp, showPopup] = useState(false);
  const [ProductToEdit, setProductToEdit] = useState();

  return (
    <div className="mt-4 h-full w-full">
      {PopUp && (
        <EditPopUp ProductToEdit={ProductToEdit} showPopup={showPopup} />
      )}
      <h1 className="text-[2.2vw] font-medium">Products</h1>
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
