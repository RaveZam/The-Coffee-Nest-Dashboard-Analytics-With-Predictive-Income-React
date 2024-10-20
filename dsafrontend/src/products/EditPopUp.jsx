export default function EditPopUp({}) {
  return (
    <>
      <div className="absolute inset-0 h-screen w-screen bg-black opacity-50"></div>
      <div className="absolute left-1/2 top-1/2 flex w-3/6 -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 p-4">
        <h1 className="text-[1.5vw] font-medium">Edit Product</h1>
        <form className="flex w-3/6 flex-col p-4" action="">
          <label>Product Name</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="text"
            required
          />
          <label className="">Description</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="text"
            required
          />
          <label className="">Stock</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="number"
            required
          />
          <label className="">Price</label>
          <input
            className="rounded-md border-2 border-gray-200 px-2 py-1"
            type="number"
            required
          />
          <select
            className="mt-4 rounded-md border-2 border-gray-200 px-2 py-1"
            name="dropdown"
            required
          >
            <option value="option1">Iced Coffee</option>
            <option value="option2">Hot Coffee</option>
            <option value="option3">Milk Shake</option>
            <option value="option3">Pastry</option>
          </select>
          <input
            className="mt-4 file:rounded-md file:border-gray-200 file:bg-white"
            type="file"
            required
          />
          <button className="mt-4 rounded-md bg-blue-600 px-8 py-2 text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
