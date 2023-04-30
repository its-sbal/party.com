import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
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
          <label>Description</label>
          <input
            placeholder="Description"
            type="text"
            {...register("Description", { required: true, maxLength: 1000 })}
          />
        </Form.Field>
        {errors.Description && <p>Please check the Description</p>}

        <Form.Field>
          <label>Price</label>
          <input
            placeholder="Price"
            type="number"
            {...register("Price", { required: true })}
          />
        </Form.Field>
        {errors.Price && <p>Please check the Price</p>}
        <Form.Field>
          <label>Email</label>
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
          <label>Password</label>
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
            placeholder="Address"
            type="text"
            {...register("Address", { required: true, maxLength: 100 })}
          />
        </Form.Field>
        {errors.Address && <p>Please check the Address</p>}

        <Form.Field>
          <label>Phone Number</label>
          <input
            placeholder="phNumber"
            type="text"
            {...register("phNumber", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.phNumber && <p>Please check the Phone Number</p>}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
