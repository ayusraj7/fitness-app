import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setToken,setUserData} from '../../../reducer/slices/userSlice'
import {toast} from 'react-hot-toast';
import { CgCloseO } from "react-icons/cg";
import {setShowing} from '../../../reducer/slices/DropMenu'
const DropDownMenu = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {userData}=useSelector((state=>state.user));
    const {show}=useSelector(state=>state.dropMenu);
    
  
    const usertype=userData?.accountType;
   
    const logout= ()=>{
        dispatch(setToken(null));
        dispatch(setUserData(null));
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        toast.success("Logged Out");
        navigate('/');
    }

    const closedrop = (e)=>{
        e.stopPropagation();
        dispatch(setShowing(false));
        
    }
  return (
    <div className={`flex absolute top-0 right-[-6%] bg-neutral-800 border-2  border-neutral-700 h-[210px] w-[190px] rounded-md mt-[20px] pt-2 pl-3 opacity-90 flex-col`}>
        <CgCloseO className='text-white absolute right-4 top-3 ' onClick={closedrop}/>
        <p className='hover:bg-neutral-700 hover:rounded-md hover:mr-1  transition-all duration-300 p-1 rounded-md px-2 hover:text-slate-200  '>My Profile</p>
        {
            usertype==='member' && <>
                <p className=' hover:bg-neutral-700 hover:rounded-md hover:mr-1 transition-all duration-300 p-1 rounded-md px-2'>Cart</p>
                <p className=' hover:bg-neutral-700 hover:rounded-md hover:mr-1 transition-all duration-300 p-1 rounded-md px-2'>Enrolled Classes</p>
            </>    
        }
        {
            usertype==='trainer' && <>
                <p className='hover:bg-neutral-700 hover:rounded-md hover:mr-1 transition-all duration-300 p-1 rounded-md px-2'>My Elements</p>
                <p className=' hover:bg-neutral-700 hover:rounded-md hover:mr-1 transition-all duration-300 p-1 rounded-md px-2 hover:text-slate-200  '>Dashboard</p>
                
            </>    
        }
        
        <p className=' hover:bg-neutral-700 hover:rounded-md hover:mr-1 transition-all duration-300 p-1 rounded-md px-2'>Settings</p>
        <p className='hover:bg-neutral-700 hover:rounded-md hover:mr-1  transition-all duration-300 p-1 rounded-md px-2' onClick={logout}>Logout</p>
    </div>
  )
}

export default DropDownMenu