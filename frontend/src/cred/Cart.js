import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // get the items from the cart slice of state
  console.log(cartItems);
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += parseInt(item.price);
  });

  //adding id of vendor to array===========
  // Extract the values from cartItems and store them in an array
  // const myArrayFieldValues = cartItems.map((item) => item._id);

  // fetch("http://127.0.0.1:8000/userUpdate/", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //   .then((response) => {
  //     // Handle the response here
  //     console.log(response.data);
  //   });

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
