import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormValidation from "./FormValidation";
import { Button } from "react-bootstrap";

function Cart() {
  const [show, setShow] = useState(false);

  const cartItems = useSelector((state) => state.cart.items); // get the items from the cart slice of state
  console.log(cartItems);
  let TotalPrice = 0;
  cartItems.forEach((item) => {
    TotalPrice += parseInt(item.price);
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
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            {item.vendorName} - {item.price}
          </li>
        ))}
      </ul>
      <h1>Total Price : {TotalPrice}</h1>

      <Button onClick={() => setShow(true)}>Check Out</Button>

      {show && <FormValidation TotalPrice={TotalPrice} cartItems={cartItems} />}
    </div>
  );
}

export default Cart;
