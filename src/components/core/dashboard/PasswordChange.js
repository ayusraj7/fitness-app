import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import toast from "react-hot-toast";
import axios from "axios";

const PasswordChange = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const changePassword = async (e) => {
    const url = process.env.REACT_APP_BACKEND_URL + "/api/updatePassword";
    e.preventDefault();

    if (!formData.confirmPassword && !formData.newPassword) {
      toast.error("Fill all the Details");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("loading");

    try {
      const user = await axios.post(url, {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
        token: token,
      });
      toast.success(user.data.message);
    } catch (error) {
      toast.error("Error in Updating Password");
    }
    setLoading(false);
    toast.dismiss(toastId);
  };
  return (
    <div className="flex flex-col gap-3 relative border  rounded-md border-neutral-500  h-auto  p-5 bg-neutral-600 px-[10%]">
      <h1 className="text-2xl text-gray-300 font-extralight">Password</h1>
      <label htmlFor="currentPassword">
        Current Password
        <input
          type="text"
          name="currentPassword"
          id="currentPassword"
          className="focus:outline-none mt-1 px-2 py-1  w-full rounded-sm focus:border-none text-orange-600"
          required
          placeholder="Enter Current Password"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="newPassword">
        New Password
        <input
          type="text"
          name="newPassword"
          id="newPassword"
          className="mt-1 px-2 py-1 focus:outline-none w-full rounded-sm focus:border-none text-orange-600"
          required
          placeholder="Enter New Password"
          onChange={handleChange}
        />
      </label>
      <div className=" flex gap-3 ">
        <Button
          text={loading ? "loading" : "Update"}
          css={
            " bg-orange-400 py-1  hover:bg-white hover:text-blue-900 rounded-sm "
          }
          onclick={loading ? () => console.log("hello") : changePassword}
        />
        <Button
          text={"Cancel"}
          css={" bg-gray-400  hover:bg-white hover:text-blue-900 rounded-sm "}
          onclick={() => navigate("/dashboard/profile")}
        />
      </div>
    </div>
  );
};

export default PasswordChange;
