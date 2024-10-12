import { FaArrowTrendUp } from "react-icons/fa6";
export default function IncreaseComponent() {
  return (
    <div className="ml-2 mt-1 flex items-center rounded-lg bg-[#E7F8F6] px-2 text-[#11B29F]">
      <h1 className="text-[0.9]">12%</h1>
      <FaArrowTrendUp className="ml-1 scale-125 text-[0.8vw] opacity-80" />
    </div>
  );
}
