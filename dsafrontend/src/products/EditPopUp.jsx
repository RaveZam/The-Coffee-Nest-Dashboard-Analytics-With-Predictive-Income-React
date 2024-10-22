import { IoMdClose } from "react-icons/io";
import SuccessPopUp from "../components/SuccessPopUp";
import axios from "axios";
import { useState } from "react";

export default function EditPopUp({
  showPopup,
  ProductToEdit,
  setProductToEdit,
}) {
  const [showSuccess, setshowSuccess] = useState(false);
  const updatedProduct = ProductToEdit[0];

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:8000/api/products/delete",
        updatedProduct,
      );
      if (response.status == 201) {
        setshowSuccess(true);
        console.log("Success");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8000/api/products/update",
        updatedProduct,
      );

      if (response.status == 201) {
        setshowSuccess(true);
        console.log("Success");
      } else {
        console.error("Failed to update product", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {showSuccess && <SuccessPopUp setshowSuccess={setshowSuccess} />}
      <div className="absolute inset-0 h-screen w-screen bg-black opacity-50"></div>
      <div className="absolute left-1/2 top-1/2 flex w-3/6 -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 p-4">
        <h1 className="flex text-[1.5vw] font-medium">
          Edit Product
          <IoMdClose
            onClick={() => showPopup(false)}
            className="ml-auto scale-100 cursor-pointer"
          />
        </h1>
        <form className="flex w-3/6 flex-col p-4">
          <label>Product Name</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="text"
            required
            value={ProductToEdit[0].name}
            onChange={(e) =>
              setProductToEdit((prevProduct) => [
                {
                  ...prevProduct[0], // Spread the previous product's properties
                  name: e.target.value, // Update only the name property
                },
              ])
            }
          />
          <label className="">Description</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="text"
            required
            value={ProductToEdit[0].desc}
            onChange={(e) =>
              setProductToEdit((prevProduct) => [
                {
                  ...prevProduct[0], // Spread the previous product's properties
                  desc: e.target.value, // Update only the name property
                },
              ])
            }
          />
          <label className="">Stock</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="number"
            required
            value={ProductToEdit[0].stocks}
            onChange={(e) =>
              setProductToEdit((prevProduct) => [
                {
                  ...prevProduct[0], // Spread the previous product's properties
                  stocks: e.target.value, // Update only the name property
                },
              ])
            }
          />
          <label className="">Price</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="number"
            required
            value={ProductToEdit[0].price}
            onChange={(e) =>
              setProductToEdit((prevProduct) => [
                {
                  ...prevProduct[0], // Spread the previous product's properties
                  price: e.target.value, // Update only the name property
                },
              ])
            }
          />
          <select
            className="mt-4 rounded-md border-2 border-gray-200 px-2 py-1"
            name="dropdown"
            required
            value={ProductToEdit[0].category}
            onChange={(e) =>
              setProductToEdit((prevProduct) => [
                {
                  ...prevProduct[0], // Spread the previous product's properties
                  category: e.target.value, // Update only the name property
                },
              ])
            }
          >
            <option value="option1">Iced Coffee</option>
            <option value="option2">Hot Coffee</option>
            <option value="option3">Milk Shake</option>
            <option value="option3">Pastry</option>
          </select>
          <div className="mt-4 flex">
            <input
              className="mt-4 file:mr-4 file:cursor-pointer file:rounded-3xl file:border-none file:bg-blue-600 file:px-4 file:py-2 file:text-white"
              type="file"
              required
            />
            <label className="mt-4 whitespace-nowrap">
              Current Image: {ProductToEdit[0].image.split("/").pop()}
            </label>
          </div>
        </form>
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="mt-4 w-1/2 rounded-3xl bg-blue-600 px-8 py-2 text-white"
          >
            Submit
          </button>
          <button
            onClick={handleDelete}
            className="mt-4 w-1/2 rounded-3xl border-2 border-black bg-white px-8 py-2"
          >
            Delete Product
          </button>
        </div>
      </div>
    </>
  );
}
