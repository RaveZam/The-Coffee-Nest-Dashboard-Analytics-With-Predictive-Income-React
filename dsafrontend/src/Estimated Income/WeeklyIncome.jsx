import IncreaseComponent from "../components/IncreaseComponent";
import DecreaseComponent from "../components/DecreaseComponent";
import SmallLoading from "../preloaders/SmallLoading";
export default function WeeklyIncome({
  salesPerWeek,
  week1Difference,
  week2Difference,
  week3Difference,
  week4Difference,
  lastMonthSalesPerWeek,
}) {
  return (
    <div className="mt-2">
      <div className="mt-2 flex gap-4">
        <div className="bg-gray-0 flex w-1/4 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-2 font-bold"> Week 1 Sales </h1>
            <div className="flex">
              <h2 className="font-semibold text-prof-blue">
                ₱{salesPerWeek[0]}
              </h2>
              {isNaN(week1Difference) ? (
                <SmallLoading />
              ) : week1Difference > 0 ? (
                <IncreaseComponent value={week1Difference.toFixed(2)} />
              ) : (
                <DecreaseComponent value={week1Difference.toFixed(2)} />
              )}
            </div>
          </div>
          <div className="flex">
            <span className="animate-appearFromTop py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
              {isNaN(lastMonthSalesPerWeek[3]) || salesPerWeek[0] === 0 ? (
                <div className="mr-2 mt-1 scale-90">
                  <SmallLoading />
                </div>
              ) : salesPerWeek[0] - lastMonthSalesPerWeek[3] < 0 ? (
                <span className="animate-appearFromTop">
                  -₱{Math.abs(salesPerWeek[0] - lastMonthSalesPerWeek[3])}
                </span>
              ) : (
                <span className="animate-appearFromTop">
                  +₱{Math.abs(salesPerWeek[0] - lastMonthSalesPerWeek[3])}
                </span>
              )}
            </span>
            <span className="py-1 text-[0.9vw] font-medium text-gray-500">
              from last week
            </span>
          </div>
        </div>
        <div className="bg-gray-0 flex w-1/4 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-2 font-bold"> Week 2 Sales </h1>
            <div className="flex">
              <h2 className="font-semibold text-prof-blue">
                ₱{salesPerWeek[1]}
              </h2>
              {isNaN(week2Difference) ? (
                <SmallLoading />
              ) : week2Difference > 0 ? (
                <IncreaseComponent value={week2Difference.toFixed(2)} />
              ) : (
                <DecreaseComponent value={week2Difference.toFixed(2)} />
              )}
            </div>
          </div>
          <div className="flex">
            <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
              {salesPerWeek[1] - salesPerWeek[0] < 0
                ? `-₱${Math.abs(salesPerWeek[0] - salesPerWeek[0])}`
                : `+₱${salesPerWeek[1] - salesPerWeek[0]}`}
            </span>
            <span className="py-1 text-[0.9vw] font-medium text-gray-500">
              from last week
            </span>
          </div>
        </div>

        <div className="bg-gray-0 flex w-1/4 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-2 font-bold"> Week 3 Sales </h1>
            <div className="flex">
              <h2 className="font-semibold text-prof-blue">
                ₱{salesPerWeek[2]}
              </h2>
              {isNaN(week3Difference) ? (
                <SmallLoading />
              ) : week3Difference > 0 ? (
                <IncreaseComponent value={week3Difference.toFixed(2)} />
              ) : (
                <DecreaseComponent value={week3Difference.toFixed(2)} />
              )}
            </div>
          </div>
          <div className="flex">
            <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
              {salesPerWeek[2] - salesPerWeek[1] < 0
                ? `-₱${Math.abs(salesPerWeek[2] - salesPerWeek[1])}`
                : `+₱${salesPerWeek[2] - salesPerWeek[1]}`}
            </span>
            <span className="py-1 text-[0.9vw] font-medium text-gray-500">
              from last week
            </span>
          </div>
        </div>

        <div className="bg-gray-0 flex w-1/4 flex-col rounded-2xl border-2 border-gray-200 bg-gray-50 px-2 py-2">
          <div className="flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 drop-shadow-sm">
            <h1 className="mb-2 font-bold"> Week 4 Sales </h1>
            <div className="flex">
              <h2 className="font-semibold text-prof-blue">
                ₱{salesPerWeek[3]}
              </h2>
              {isNaN(week4Difference) ? (
                <SmallLoading />
              ) : week4Difference > 0 ? (
                <IncreaseComponent value={week4Difference.toFixed(2)} />
              ) : (
                <DecreaseComponent value={week4Difference.toFixed(2)} />
              )}
            </div>
          </div>
          <div className="flex">
            <span className="py-1 pl-2 pr-1 text-[0.9vw] font-semibold">
              {salesPerWeek[3] - salesPerWeek[2] < 0
                ? `-₱${Math.abs(salesPerWeek[3] - salesPerWeek[2])}`
                : `+₱${salesPerWeek[3] - salesPerWeek[2]}`}
            </span>
            <span className="py-1 text-[0.9vw] font-medium text-gray-500">
              from last week
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
