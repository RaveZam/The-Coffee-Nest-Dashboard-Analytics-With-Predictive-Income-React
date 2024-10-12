import { FaArrowTrendDown } from "react-icons/fa6";

export default function DecreaseComponent({ value }) {
  return (
    <div className="bg-fail-bg text-fail-text ml-2 flex items-center rounded-lg px-2">
      <h1 className="text-[0.9]">{value}%</h1>
      <FaArrowTrendDown className="ml-1 scale-125 text-[0.8vw] opacity-80" />
    </div>
  );
}
