import { IoMdClose } from "react-icons/io";

export default function EditPopUp({ showPopup, ProductToEdit }) {
  if (ProductToEdit == 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="absolute inset-0 h-screen w-screen bg-black opacity-50"></div>
      <div className="absolute left-1/2 top-1/2 flex w-3/6 -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 p-4">
        <h1 className="flex text-[1.5vw] font-medium">
          Edit Product
          <IoMdClose
            onClick={() => showPopup(false)}
            className="ml-auto scale-100 cursor-pointer"
          />
        </h1>
        <form className="flex w-3/6 flex-col p-4" action="">
          <label>Product Name</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="text"
            required
            value={ProductToEdit[0].name}
            onChange={}
          />
          <label className="">Description</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="text"
            required
            value={ProductToEdit[0].desc}
          />
          <label className="">Stock</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="number"
            required
            value={ProductToEdit[0].stocks}
          />
          <label className="">Price</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="number"
            required
            value={ProductToEdit[0].price}
          />
          <select
            className="mt-4 rounded-md border-2 border-gray-200 px-2 py-1"
            name="dropdown"
            required
            value={ProductToEdit[0].category}
          >
            <option value="option1">Iced Coffee</option>
            <option value="option2">Hot Coffee</option>
            <option value="option3">Milk Shake</option>
            <option value="option3">Pastry</option>
          </select>
          <input
            className="mt-4 file:mr-4 file:cursor-pointer file:rounded-3xl file:border-none file:bg-blue-600 file:px-4 file:py-2 file:text-white"
            type="file"
            required
            placeholder={ProductToEdit[0].image}
          />
        </form>
        <button className="mt-4 rounded-3xl bg-blue-600 px-8 py-2 text-white">
          Submit
        </button>
      </div>
    </>
  );
}
