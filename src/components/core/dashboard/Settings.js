import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import UploadPhoto from "./UploadPhoto";
import Button from "../../common/Button";
import toast from "react-hot-toast";
import axios from "axios";
import { setUserData } from "../../../reducer/slices/userSlice";
import PasswordChange from "./PasswordChange";
import EditProfile from "./EditProfile";

const Settings = () => {
  const { userData } = useSelector((state) => state.user);
  const [url, setUrl] = useState(null);
  const { token } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitPhoto = async (e) => {
    e.preventDefault();
    if (!url) {
      toast.error("First Upload Image");
      return;
    }
    setLoading(true);
    const toastId = toast.loading("loading");
    try {
      const user = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/api/updatePhoto",
        {
          img_url: url,
          token: token,
        }
      );

      dispatch(setUserData(user.data.data));

      toast.success(user.data.message);
    } catch (error) {
      toast.error("Error in Updating photo");
    }
    setLoading(false);
    toast.dismiss(toastId);
  };

  return (
    <div>
      <div className="flex w-[85%] px-10 mx-auto flex-col gap-3">
        <div className=" border-[#ab9999] border-b-2 ">
          <h1 className="font-Inter text-[#f7ffff]  text-5xl font-extralight ">
            Settings
          </h1>
          <div className="h-3 bg-[#ab9999] w-[35%] mt-2"></div>
        </div>
        <p className="font-semibold text-xl text-white">
          Update your personal Details
        </p>
      </div>

      <div className="flex flex-col gap-14 w-[92%] sm:w-[80%] mx-auto mt-9">
        <div className="relative border  rounded-md border-neutral-500 w-full h-auto flex flex-col   p-5 items-center bg-neutral-600 px-[10%]">
          <img
            src={userData?.additionalDetails?.img}
            alt={userData?.name}
            className="h-[100px] w-[100px] rounded-full "
          />
          <UploadPhoto setUrl={setUrl} />
          <div className=" flex gap-3 ">
            <Button
              text={loading ? "loading" : "Update"}
              css={
                " bg-orange-400 py-1  hover:bg-white hover:text-blue-900 rounded-sm "
              }
              onclick={loading ? () => console.log("hello") : submitPhoto}
            />
            <Button
              text={"Cancel"}
              css={
                " bg-gray-400  hover:bg-white hover:text-blue-900 rounded-sm "
              }
              onclick={() => navigate("/dashboard/profile")}
            />
          </div>
        </div>

        <div className="rounded-md flex flex-col p-[5%] pb-10 px-[10%] gap-3 border border-neutral-500 bg-neutral-600">
          <h1 className="text-2xl text-gray-300 font-extralight">About</h1>
          <p>
            {userData?.additionalDetails?.about?.length > 0
              ? userData?.additionalDetails?.about
              : "Fill the Details"}
          </p>
        </div>

        {/* <div className='rounded-md flex flex-col p-[5%] pb-10 px-[10%] gap-3 border border-neutral-500 bg-neutral-600'>

              <div className='flex justify-between mt-3'>
                  <h1 className=' text-2xl text-gray-300 font-extralight'>Personal Details</h1>            
              </div>

              <div className='flex flex-col'>
                  <p className='text-sm text-gray-400'>Name</p>
                  <p className='text-[18px] '>{userData?.name}</p>
              </div>

              <div className='flex sm:flex-row flex-col justify-between'>
                  <div className='flex flex-col'>
                      <p className='text-sm text-gray-400'>Email</p>
                      <p>{userData?.email}</p>
                  </div>
                  <div className='flex flex-col '>
                      <p className='text-gray-400 text-sm'>Mobile No</p>
                      <p>{userData?.mobileno}</p>
                  </div>
              </div>
              

              <div className='flex justify-between'>
                  <div>
                      <p className='text-gray-400 text-sm'>Age</p>
                      <p>{userData?.additionalDetails?.age?.length>0 ? userData.additionalDetails.age : 'Fill the Details'}</p>
                  </div>
                  <div>
                      <p className='text-sm text-gray-400'>Gender</p>
                      <p>{userData?.additionalDetails?.gender?.length>0 ? userData.additionalDetails.gender :'Fill the Details'}</p>
                  </div>
              </div>

              <div className=' flex gap-3 mt-5 '>
                  <Button text={loading?'loading':'Update'} css={' bg-orange-400 py-1  hover:bg-white hover:text-blue-900 rounded-sm '} onclick={loading ?()=>(console.log('hello')):submitPhoto}/>
                  <Button text={'Cancel'} css={' bg-gray-400  hover:bg-white hover:text-blue-900 rounded-sm '} onclick={()=>navigate('/dashboard/profile')}/>
              </div>



          </div> */}

        <EditProfile userData={userData} />

        <PasswordChange />
      </div>
    </div>
  );
};

export default Settings;
