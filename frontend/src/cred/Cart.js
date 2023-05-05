import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormValidation from "./FormValidation";
import { Button } from "react-bootstrap";

function Cart() {
  const [show, setShow] = useState(false);

  const cartItems = useSelector((state) => state.cart.items); // get the items from the cart slice of state
  console.log(cartItems);
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += parseInt(item.price);
  });

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            {item.vendorName} - {item.price}
          </li>
        ))}
      </ul>
      <h1>Total Price : {totalPrice}</h1>

      <Button onClick={() => setShow(true)}>Check Out</Button>

      {show && <FormValidation totalPrice={totalPrice} />}
    </div>
  );
}

export default Cart;
