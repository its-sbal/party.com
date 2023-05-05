import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // get the items from the cart slice of state
  console.log(cartItems);
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += parseInt(item.price);
  });
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
      <h1>Total Price : {totalPrice}</h1>
    </div>
  );
}

export default Cart;
