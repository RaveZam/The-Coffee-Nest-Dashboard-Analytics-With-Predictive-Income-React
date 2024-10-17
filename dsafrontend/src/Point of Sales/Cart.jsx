export function Cart({ cart }) {
  return (
    <div className="flex w-[35vw] flex-col text-left">
      <h1 className="pl-4 pt-8 text-[2vw] font-medium">Current Order</h1>
      <div className="h-4/6 w-5/6 self-center rounded-md p-4">
        {/* <h1 className="text-gray-300">Cart Empty...</h1> */}
        {cart.map((item) => (
          <h1>{item.id}</h1>
        ))}
      </div>
      <div className="mb-8 mt-auto flex w-5/6 flex-col items-center self-center">
        <div className="mb-4 flex w-full justify-between rounded-md bg-gray-100 p-4">
          <h1 className="text-[1.2vw]">Total:</h1>
          <h1 className="text-[1.2vw]">$34</h1>
        </div>
        <div>
          <button className="whitespace-nowrap rounded-lg bg-prof-blue px-12 py-2 text-white">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
