import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import { setSignupData,setLoading } from '../../../reducer/slices/userSlice';

const SignupForm = () => {
    const [showpassword,setShowPassword]=useState(false)
    const [confirmpassword,setConfirmPassword]=useState(false)
    const [accountType,setType]=useState('member');
      
   const navigate=useNavigate();
   const dispatch=useDispatch();
   const {loading}=useSelector(state=>state.user)
   

    const [formData,setFormData] =useState({
        name:"",
        mobileno:"",
        email:"",
        password:"",
        confirmPassword:"",
    })
    const{name,mobileno,email,password,confirmPassword}=formData;

    const handleonchange=(e)=>{
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value
        }))
        
    }

    
    
    
    
    const handleSubmit= async(e) =>{
            
            e.preventDefault();
            const toastId=toast.loading('loading');
            dispatch(setLoading(true));
            if(password !== confirmPassword)
            {
                toast.error("Passwords Do Not Match");
                return;
            }
            try{
                    const data={...formData,accountType};                    
                    dispatch(setSignupData(data));
                    
                    const user=await axios.post(process.env.REACT_APP_BACKEND_URL+'/api/send-otp',{email});

                    if(!user.data.success)
                    {
                        throw new Error(user.data.message);
                    }
                    
                    toast.success(user.data.message);
                    navigate('/send-otp');
            }catch(error)
            {
                
                console.log('error',error);
                toast.error(error.response.data.message);
            }
            toast.dismiss(toastId);
            dispatch(setLoading(false));
            
    }

    const changePass=()=>{
        
        setShowPassword(!showpassword)
    }
    const changeConfirmPass=()=>{
      
        setConfirmPassword(!confirmpassword);
    }
    const changetab=(e)=>{
        
        if(accountType!==e)
        {
            setType(e);
        }
    }
  return (
    <div className='flex lg:flex-col gap-0 px-6 w-[100%] overflow-hidden'>
        <div className='flex justify-between items-center gap-3'>
            <div className='text-2xl sm:text-4xl text-gray-600  font-inter'>SignUp
                <div className='w-[35px] bg-violet-700 h-1'></div>
            </div>
            <div className='border-2 h-11 flex items-center border-slate-500 text-gray-300 bg-slate-500  gap-x-1 my-5 rounded-full '>
                <label htmlFor="member" className={`text-[16px] sm:text-[18px] border-slate-500 border-2 flex items-center h-full  px-2 rounded-full ${accountType==='member' && 'bg-slate-600 rounded-full'}`} onClick={(e)=>changetab('member')}>Member
                <input type="radio" name="member" id="member" className='[all:unset]'/></label>
                <label htmlFor="trainer" className={`text-[16px] sm:text-[18px] border-l border-2 h-full flex items-center border-slate-500 rounded-full bg-slate-500 px-2 ${accountType==='trainer' && 'bg-slate-600 rounded-full'}`} onClick={(e)=>changetab('trainer')}>Trainer
                <input type="radio" name="trainer" id="trainer" className='[all:unset]' /></label>
                
            </div>
        </div>
        <form  className='w-full flex flex-col gap-3 mt-6' onSubmit={handleSubmit} >
            <div className='flex flex-col gap-3 w-full '>
                <div className='flex sm:flex-row flex-col gap-5 w-full'>
                    <div className='border-b-2 sm:w-1/2 flex flex-col'>
                        <label htmlFor="name">Name<sup className="text-pink-600">*</sup></label>
                        <input type="text" required name="name" value={name} onChange={handleonchange} id="name" placeholder='Enter your name' className='[all:unset]'/>
                    </div>
                    <div className='border-b-2 sm:w-1/2 flex flex-col'>
                        <label htmlFor="mobileno">Mobile No<sup className="text-pink-600">*</sup></label>
                        <input type="number" required name="mobileno" id="mobileno" value={mobileno} onChange={handleonchange} placeholder='Enter your mobile no' className='[all:unset]' maxLength={10} minLength={10}/>
                    </div>
                </div>
                
                <div className='flex flex-col border-b-2 '>
                    <label htmlFor="email">Email<sup className="text-pink-600">*</sup></label>
                    <input type="email" required name="email" id="email" value={email} onChange={handleonchange} placeholder='Enter your email..' className='[all:unset]'/>
                </div>
                <div className='flex flex-col sm:flex-row gap-5 w-full'>
                    <div className='sm:w-1/2 flex border-b-2 py-2 item-center relative'>
                        
                        <div className='flex flex-col justify-between '>
                            <label htmlFor="password">Password<sup className="text-pink-600">*</sup></label>
                            <input required className='[all:unset] w-full' value={password} onChange={handleonchange} type={showpassword?'text':'password'} name="password" id="password" placeholder='Enter password' />
                            {
                                !showpassword ? (
                                    <AiOutlineEye className='absolute right-0 top-[60%]' onClick={changePass}/>
                                ):(<AiOutlineEyeInvisible className='absolute right-0 top-[60%]' onClick={changePass}/>)
                            }
                        </div>
                        
                    </div>
                    
                    <div className='sm:w-1/2 flex border-b-2 py-2 item-center relative'>
                        
                        <div className='flex flex-col justify-between '>
                            <label htmlFor="confirmPassword">Confirm Password<sup className="text-pink-600">*</sup></label>
                            <input required className='[all:unset] w-full' type={confirmpassword?'text':'password'} name="confirmPassword" value={confirmPassword} onChange={handleonchange} id="confirm-password" placeholder='Confirm password' />
                            {
                                !confirmpassword ? (
                                    <AiOutlineEye className='absolute right-0 top-[60%]' onClick={changeConfirmPass}/>
                                ):(<AiOutlineEyeInvisible className='absolute right-0 top-[60%]' onClick={changeConfirmPass}/>)
                            }
                        </div>
                        
                    </div>
                </div>

            </div>
            <button disabled={loading?true:false} className='bg-violet-700 rounded-md p-3 text-white font-medium transition-all duration-200 hover:bg-violet-600 hover:text-xl mt-2 ' >{loading?'Loading':'SignUp'}</button>
        </form>
    </div>
  )
}

export default SignupForm