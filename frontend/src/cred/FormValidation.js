import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function FormValidation({ totalPrice }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://127.0.0.1:8000/serviceUpdate/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="cric1">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <h1>FILL DETAILS TO ORDER</h1>
          <label>First Name</label>
          <input
            type="text"
            {...register("FName", { required: true, maxLength: 100 })}
          />
        </Form.Field>
        {errors.FName && <p>Please check the FName</p>}
        <Form.Field>
          <label>Last Name</label>
          <input
            type="text"
            {...register("LName", { required: true, maxLength: 100 })}
          />
        </Form.Field>
        {errors.LName && <p>Please check the LName</p>}
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="abc@gmail.com"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Field>
        {errors.email && <p>Please check the Email</p>}
        <Form.Field>
          <label>Address</label>
          <input
            type="text"
            {...register("Address", { required: true, maxLength: 100 })}
          />
        </Form.Field>
        {errors.Address && <p>Please check the Address</p>}

        <Form.Field>
          <label>Mobile Number</label>
          <input
            placeholder="0123456789"
            type="text"
            {...register("phNumber", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.phNumber && <p>Please check the Phone Number</p>}
        <Form.Field>
          <label>Total Price</label>
          <input
            placeholder="Total Price"
            type="text"
            value={totalPrice}
            {...register("Total Price", { required: true })}
          />
        </Form.Field>
        {errors.TotalPrice && <p>Please check the Phone Number</p>}
        <div className="cric2">
          <Button type="submit">Place Order</Button>
        </div>
      </Form>
    </div>
  );
}
