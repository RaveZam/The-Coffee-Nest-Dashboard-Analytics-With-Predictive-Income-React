import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useState } from "react";

export default function AddProduct({ showAddproduct }) {
  const [newProduct, setNewProduct] = useState({});

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/products/create",
        newProduct,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response.status === 201) {
        console.log("Product added successfully", response.data);
      } else {
        console.error("Failed to add product", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="absolute inset-0 h-screen w-screen bg-black opacity-50"></div>
      <div className="absolute left-1/2 top-1/2 flex w-3/6 -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 p-4">
        <h1 className="flex text-[1.5vw] font-medium">
          Add Product
          <IoMdClose
            onClick={() => showAddproduct(false)}
            className="ml-auto scale-100 cursor-pointer"
          />
        </h1>
        <form className="flex w-3/6 flex-col p-4">
          <label>Product Name</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="text"
            required
            onChange={(e) =>
              setNewProduct((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
          <label>Description</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="text"
            required
            onChange={(e) =>
              setNewProduct((prev) => ({
                ...prev,
                desc: e.target.value,
              }))
            }
          />
          <label>Stock</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="number"
            required
            onChange={(e) =>
              setNewProduct((prev) => ({
                ...prev,

                stocks: parseInt(e.target.value),
              }))
            }
          />
          <label>Price</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="number"
            required
            onChange={(e) =>
              setNewProduct((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
          />
          <label>Category</label>
          <select
            className="mt-4 rounded-md border-2 border-gray-200 px-2 py-1"
            name="dropdown"
            required
            onChange={(e) =>
              setNewProduct((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
          >
            <option value="">Select a category</option>{" "}
            {/* Placeholder option */}
            <option value="Iced Coffee">Iced Coffee</option>
            <option value="Hot Coffee">Hot Coffee</option>
            <option value="Milk Shake">Milk Shake</option>
            <option value="Pastry">Pastry</option>
          </select>
          <label>Image</label>
          <input
            className="mt-4 file:mr-4 file:cursor-pointer file:rounded-3xl file:border-none file:bg-blue-600 file:px-4 file:py-2 file:text-white"
            type="file"
            required
            onChange={(e) => {
              setNewProduct((prev) => ({
                ...prev,
                image: e.target.files[0],
              }));
            }}
          />
        </form>
        <button
          onClick={handleSubmit}
          className="mt-4 rounded-3xl bg-blue-600 px-8 py-2 text-white"
        >
          Add Product
        </button>
      </div>
    </>
  );
}
