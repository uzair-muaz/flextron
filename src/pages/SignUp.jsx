import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.number()
      .required("Phone number is required")
      .typeError("Invalid phone number"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password should be of minimum 8 characters length"),
  });

  const initialValues = {
    email: "",
    password: "",
    phone:'',
  };

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-3">
        <div className="relative w-full max-w-[450px]">
          <img
            className="object-cover w-full h-28"
            src="https://img.freepik.com/free-psd/3d-character-young-man-with-business-concept_1150-64049.jpg?w=2000&t=st=1695475056~exp=1695475656~hmac=7d21c4d62e52c4683dac4ce1cc8a55d3f36d7af45f8493838474246ccca3f9fe"
            alt="image"
          />
          <div className="bg-gray-200 top-[75%] bg-transparent left-8 absolute">
            <img
              className="object-contain w-[72px] h-[72px] rounded-full"
              src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?size=626&ext=jpg&ga=GA1.1.1764889591.1695032775&semt=sph"
              alt="avatar"
            />
          </div>
        </div>

        <div className="bg-white p-4 md:p-8 shadow-md w-full max-w-[450px]">
          <form onSubmit={formik.handleSubmit}>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-700 mb-2 mt-[40px] "
            >
              Email
            </label>

            <div
              className={` ${
                !(formik.touched.email && formik.errors.email) ? "mb-4" : ""
              } border-gray-300 border rounded-md flex items-center h-9`}
            >
              <span className="h-full flex items-center py-1 px-3 text-sm font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tl-md rounded-bl-md">
                <FaEnvelope />
              </span>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter an email"
                className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 focus:outline-none "
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600 text-xs mb-2 font-semibold py-2">
                {formik.errors.email}
              </div>
            )}

            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-700 mb-2"
            >
              Password
            </label>
            <div
              className={` ${
                !(formik.touched.password && formik.errors.password)
                  ? "mb-4"
                  : ""
              } border-gray-300 border rounded-md flex items-center h-9`}
            >
              <span className="h-full flex items-center py-1 px-3 text-sm font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tl-md rounded-bl-md">
                <FaLock />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 text-xs::placeholder focus:outline-none "
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-600 text-xs mb-2 font-semibold py-2">
                {formik.errors.password}
              </div>
            )}

            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-700 mb-2"
            >
              Phone
            </label>
            <div
              className={` ${
                !(formik.touched.phone && formik.errors.phone) ? "mb-6" : ""
              } border-gray-300 border rounded-md flex items-center h-9`}
            >
              <span className="h-full flex items-center py-1 px-3 text-sm font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tl-md rounded-bl-md">
                +1
              </span>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter phone"
                className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 text-xs::placeholder focus:outline-none "
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
              />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-600 text-xs mb-6 font-semibold py-2">
                {formik.errors.phone}
              </div>
            )}

            <button
              type="submit"
              className="font-normal leading-6 rounded-md text-sm h-9 w-full text-white
          bg-[#485ec4]  hover:bg-[#4458b8] focus:outline-none focus:bg-blue-500"
            >
              Register
            </button>
          </form>
        </div>

        <div className="flex gap-1 justify-center items-center w-full mt-5 text-sm font-normal leading-5 text-gray-700 text-center">
          Already have an account ?{" "}
          <span
            onClick={() => {
              navigate("/sign-in");
            }}
            className="text-blue-500 font-medium cursor-pointer"
          >
            Login
          </span>
        </div>

        <div className="flex gap-1 justify-center items-center w-full mt-4 text-sm font-normal leading-5 text-gray-700 text-center">
          Copyright © 2023 FlexTron. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default SignUp;
