import { IoCheckmarkCircle } from "react-icons/io5";
export default function SuccessPopUp({ setshowSuccess }) {
  return (
    <>
      <div className="absolute inset-0 z-40 h-screen w-screen bg-black opacity-50"></div>
      <div className="absolute left-1/2 top-1/2 z-50 flex w-1/6 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-lg bg-white p-8">
        <h1>Item Processed</h1>
        <IoCheckmarkCircle className="h-12 w-12 scale-150 text-[#11B29F]" />
        <button
          onClick={() => setshowSuccess(false)}
          className="w-full rounded-full bg-blue-600 p-2 text-white"
        >
          Ok
        </button>
      </div>
    </>
  );
}
