export function Cart({ cart, setCart }) {
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };

  return (
    <div className="flex w-[35vw] flex-col text-left">
      <h1 className="pl-4 pt-8 text-[2vw] font-medium">Current Order</h1>
      <div className="h-4/6 w-5/6 self-center rounded-md p-4">
        {cart.length == 0 ? (
          <h1 className="text-gray-300">Cart Empty...</h1>
        ) : (
          cart.map((item) => (
            <div className="flex" key={item.product_name}>
              <img className="h-12 w-12" src={item.product_img_url} alt="" />
              <div>
                <h1>{item.product_name}</h1>
                <h1>{item.price}</h1>
              </div>
              <div className="ml-auto mt-auto flex">
                <button
                  disabled={item.quantity == 1 ? true : false}
                  onClick={() => decreaseQuantity(item.id)}
                  className="rounded-lg border-2 border-gray-300 px-2"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="rounded-lg border-2 border-gray-300 px-2"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
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

// {cart.length == 0 ? (
//   <h1 className="text-gray-300">Cart Empty...</h1>
// ) :  (
// {cart.map} (    <div>
//     <img className="h-12 w-12" src={item.product_img_url} alt="" />
//     <h1>{item.product_name}</h1>
//   </div>)
// )}
