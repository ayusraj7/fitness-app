import React from 'react'
import {MdEmail,MdLock} from 'react-icons/md'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../reducer/slices/userSlice'

const LoginForm = () => {
    const navigate=useNavigate();
    const [showpassword,setShowPassword]=useState(false)
    const[formData,setFormData]=useState({
        email:"",
        password:""
    })
    const dispatch=useDispatch();
    const{email,password}=formData;
    const handleChange=(event)=>{
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
    

        const handleSubmit= async(e) =>{
            e.preventDefault();
            const toastId=toast.loading('loading');
            try{
                    console.log('formDAta',formData);
                    const user=await axios.post('http://localhost:4000/api/v1/login',{
                        email,
                        password
                    });
                    const token=user.data.token;
                    console.log('token',token);
                    localStorage.setItem('token',JSON.stringify(token));
                    dispatch(setToken(token));
                    console.log('user',user)
                    if(!user.data.success)
                    {
                       
                        throw new Error(user.data.message);
                    }
                    
                    toast.success(user.data.message);
                    console.log('user',user);
                    navigate('/about');

            }catch(error)
            {   
                console.log('error',error);
                toast.error(error.response.data.message);
            }
            toast.dismiss(toastId);
            
        }

    const changePass=()=>{
        console.log('show password',showpassword)
        console.log('change ',!showpassword)
        setShowPassword(!showpassword)
    }
  return (
    <div className='flex flex-col gap-10 mt-10 px-9 w-full md:w-[90%]'>
        <div className='text-4xl text-gray-600  font-inter'>Login
            <div className='w-[35px] bg-violet-700 h-1'></div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <div className='text-xl flex gap-2 border-b-2 py-2 items-center'>
                <MdEmail/>
                <input className='[all:unset]' type="email" name="email" id="email" placeholder='Enter your email' required value={email} onChange={handleChange} />
            </div>
            
            <div className='text-xl flex gap-2 border-b-2 py-2 item-center relative'>
                <MdLock></MdLock>
                <div className='flex justify-between'>
                  <input className='[all:unset] w-full' type={showpassword?'text':'password'} name="password" id="password" placeholder='Enter your password' required value={password} onChange={handleChange} />
                  {
                      !showpassword ? (
                          <AiOutlineEye className='absolute right-0' onClick={changePass}/>
                      ):(<AiOutlineEyeInvisible className='absolute right-0' onClick={changePass}/>)
                  }
                  
                </div>
                
            </div>
            <p className='text-violet-600 text-md'>Forgot Password?</p>

            <button className='bg-violet-700 cursor-pointer rounded-md p-3 text-white font-medium transition-all duration-200 hover:bg-violet-600 hover:text-xl' >Login</button>
        </form>
        
    </div>
  )
}

export default LoginForm