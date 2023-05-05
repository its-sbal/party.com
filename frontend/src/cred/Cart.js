import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // get the items from the cart slice of state
  console.log(cartItems);
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            {item.vendorName} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
