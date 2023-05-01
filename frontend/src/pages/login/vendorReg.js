import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./vendorReg.css";

export default function FormValidation() {
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
          <h1>REGISTER</h1>
          <label>Name...</label>
          <input
            placeholder="Name"
            type="text"
            {...register("Name", { required: true, maxLength: 100 })}
          />
        </Form.Field>
        {errors.Name && <p>Please check the Name</p>}
        <Form.Field>
          <label>Service</label>
          <input
            placeholder="Service"
            type="text"
            {...register("Service", { required: true, maxLength: 100 })}
          />
        </Form.Field>
        {errors.Service && <p>Please check the Service</p>}
        <Form.Field>
          <label>Desc...</label>
          <input
            placeholder="Description"
            type="text"
            {...register("Description", { required: true, maxLength: 1000 })}
          />
        </Form.Field>
        {errors.Description && <p>Please check the Description</p>}

        <Form.Field>
          <label>Price..</label>
          <input
            placeholder="Price"
            type="number"
            {...register("Price", { required: true })}
          />
        </Form.Field>
        {errors.Price && <p>Please check the Price</p>}
        <Form.Field>
          <label>Email..</label>
          <input
            placeholder="Email"
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
          <label>Pass...</label>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
          />
        </Form.Field>
        {errors.password && <p>Please check the Password</p>}
        <Form.Field>
          <label>Address</label>
          <input
            type="text"
            {...register("Address", { required: true, maxLength: 100 })}
          />
        </Form.Field>
        {errors.Address && <p>Please check the Address</p>}

        <Form.Field>
          <label>Phone..</label>
          <input
            placeholder="phNumber"
            type="text"
            {...register("phNumber", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.phNumber && <p>Please check the Phone Number</p>}
        <div className="cric2">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}
