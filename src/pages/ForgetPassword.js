import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: async (values) => {
      const toastId = toast.loading("loading");
      try {
        const res = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "/api/forgetPassword",
          values
        );
        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
      toast.dismiss(toastId);
    },
  });

  return (
    <div className="bg-gray-900  h-[calc(100vh-60px)] flex justify-center items-center w-[100%]">
      <div className=" w-[80%] md:w-[40%] items-center justify-center">
        <h1 className="text-3xl text-lime-400 px-3">Forget Password</h1>
        <p className="text-gray-300 px-3">Enter Your Email</p>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-2 justify-center w-[100%] px-3 mt-5"
        >
          <label htmlFor="email" className="text-white">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Name"
            className="py-1 px-3 rounded-sm  focus:outline-orange-300 text-orange-600 placeholder:text-gray-300 "
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-orange-300">{formik.errors.email}</p>
          ) : null}
          <button className="border w-fit mx-auto px-2 rounded-sm mt-8 hover:bg-white hover:text-neutral-500 py-1 transition-all duration-200 border-gray-300 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
