import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("Your First Name is Required!"),
    lastName: yup.string().required("Your Last Name is Required!"),
    email: yup.string().email().required("Your Email is Required!"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18, "Your Age must be greater than or equal to 18!")
      .required("Your Age is Required!"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters!")
      .max(12, "Password must be at most 12 characters!")
      .required("Your Password is Required!"),
    confirmedPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Must Match!")
      .required("Your Confirmed Password is Required!"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // setShow(true);
  };

  return (
    <div>
      <h2 className="mt-3">Form</h2>
      <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter First Name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <div className="Red-Validation">
            <br />
            {errors.firstName?.message}
          </div>
        )}
        {!errors.firstName && <br />}
        <br />
        <input
          type="text"
          placeholder="Enter Last Name"
          {...register("lastName")}
        />
        {errors.lastName && (
          <div className="Red-Validation">
            <br />
            {errors.lastName?.message}
          </div>
        )}
        {!errors.lastName && <br />}
        <br />
        <input type="text" placeholder="Enter Email" {...register("email")} />
        {errors.email && (
          <div className="Red-Validation">
            <br />
            {errors.email?.message}
          </div>
        )}
        {!errors.email && <br />}
        <br />
        <input type="number" placeholder="Enter Age" {...register("age")} />
        {errors.age && (
          <div className="Red-Validation">
            <br />
            {errors.age?.message}
          </div>
        )}
        {!errors.age && <br />}
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          {...register("password")}
        />
        {errors.password && (
          <div className="Red-Validation">
            <br />
            {errors.password?.message}
          </div>
        )}
        {!errors.password && <br />}
        <br />
        <input
          type="password"
          placeholder="Enter Confirmed Password"
          {...register("confirmedPassword")}
        />
        {errors.confirmedPassword && (
          <div className="Red-Validation">
            <br />
            {errors.confirmedPassword?.message}
          </div>
        )}
        {!errors.confirmedPassword && <br />}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
