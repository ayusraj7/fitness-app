import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      newPassword: yup
        .string()
        .min(6, "password must be at least 6 characters")
        .required("New Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      const toastId = toast.loading("loading");
      try {
        const res = await axios.post(
          process.env.REACT_APP_BACKEND_URL + `/api/resetPassword/${id}`,
          { newPassword: values.newPassword }
        );
        if (res.data.success) {
          toast.success(res.data.message);
        }
        navigate("/login");
      } catch (error) {
        toast.error(error.response.data.message);
      }
      toast.dismiss(toastId);
    },
  });

  return (
    <div className="h-[93vh]">
      <div className=" bg-gray-900 h-full flex justify-center items-center">
        <div className="h-[60vh] w-[70%] pt-8 rounded-md items- px-8  py-20 flex flex-col gap-2 items-center">
          <h1 className="text-3xl text-gray-300">Reset Password</h1>
          <form className="mb-4 mt-4 w-[60%]" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-1">
              <label htmlFor="newPassword" className="text-gray-300">
                New Password<span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter New Password"
                {...formik.getFieldProps("newPassword")}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <p className="text-orange-400">{formik.errors.newPassword}</p>
              ) : null}
            </div>
            <div className="flex flex-col mt-3 ">
              <label className="text-gray-300" htmlFor="confirmPassword">
                Confirm Password<span className="text-red-600 ">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm New Password"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <p className="text-orange-400">
                  {formik.errors.confirmPassword}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="inline-flex mt-5 mx-auto justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
