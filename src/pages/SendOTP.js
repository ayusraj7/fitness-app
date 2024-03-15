import React,{useEffect, useState} from 'react'
import Button from '../components/common/Button'
import { Link, useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { GiBackwardTime } from "react-icons/gi";
import { TiArrowBackOutline } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import toast from 'react-hot-toast'
import { setSignupData } from '../../src/reducer/slices/userSlice';

const SendOTP = () => {
    const [otp,setOtp]=useState(' ');
    const {signupData}=useSelector((state)=>state.user);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
      if(!signupData)
      {
        navigate('/signup');
      }
    },[])

    const reSend = async(req,res)=>{
      try{
        const toastId=toast.loading('loading');
        const email=signupData.email;
        const user=await axios.post('http://localhost:4000/api/v1/send-otp',{email})
        console.log('user',user);
        toast.dismiss(toastId);
        toast.success(user.data.message);
      }catch(error)
      {
        console.log('error',error);
        toast.error('Error in Sending OTP');
      }
    }

    const verifyEmail= async(req,res)=>{
      const toastId=toast.loading('Loading');
      try{
        
        const user=await axios.post('http://localhost:4000/api/v1/signup',{
         name:signupData.name,
         mobileno:signupData.mobileno,
         accountType:signupData.accountType,
         email:signupData.email,
         password:signupData.password,
         otp:otp,
        })
        console.log('user',user);
        if(!user.data.success)
        {
            throw new Error(user.data.message);
        }
        toast.success(user.data.message);
        dispatch(setSignupData(''))

        navigate('/login');

      }catch(error)
      {
        console.log('error',error);
         toast.error(error.response.data.message);
      }
      toast.dismiss(toastId);
    }

  return (
    <div className='text-white bg-black h-screen flex justify-center items-center'>
        <div className=' px-5 py-5 flex flex-col gap-5 w-[430px]'>
            <h1 className='text-white text-4xl font-semibold '>Verify Email</h1>
            <p className='text-xl text-gray-500 w-[80%]'>A Verification code has been sent to you. Enter the code below</p>
            <div className='flex '>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => (
                  <input
                    {...props}
                    placeholder="-"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18) text-black",
                    }}
                    className="w-[60px]  border border-neutral-700 bg-neutral-700  rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-1 focus:outline-yellow-50"
                  />
                )}
                containerStyle={{
                  justifyContent: "space-between",
                  gap: "0 6px",
                }}
              />
            </div>
            <Button text={'Verify Email'} css={'bg-yellow-400 w-full text-center text-xl text-black rouned-lg py-2 cursor-pointer '} onclick={verifyEmail}/>
            <div className='flex justify-between px-2'>
                <div className='flex gap-1 items-center'>
                <p className='text-blue-500 text-[22px]'><TiArrowBackOutline/></p>
                    <Link to='/login'><p className='hover:text-yellow-400'>Back To Signup</p></Link>
                </div>
                <div className='flex gap-1 items-center'>
                    <p className='text-blue-500 text-[22px]'><GiBackwardTime/></p>
                    <p  onClick={reSend}>Resend it</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendOTP