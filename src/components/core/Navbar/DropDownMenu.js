import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {setToken,setUserData} from '../../../reducer/slices/userSlice'
import {setCartItems,removeFromCart,resetCart} from '../../../reducer/slices/cartSlice'
import {toast} from 'react-hot-toast';
import { CgCloseO } from "react-icons/cg";
import {setShowing} from '../../../reducer/slices/DropMenu'
const DropDownMenu = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {userData}=useSelector((state=>state.user));
  
    
  
    const usertype=userData?.accountType;
   
    const logout= ()=>{
        dispatch(setToken(null));
        dispatch(setUserData(null));
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        localStorage.removeItem('cartItems');
        localStorage.removeItem('total');
        localStorage.removeItem('totalItems');
        dispatch(resetCart());
        
        toast.success("Logged Out");
        navigate('/');
    }

    const closedrop = (e)=>{
        e.stopPropagation();
        dispatch(setShowing(false));
        
    }
  return (
    <div className={`flex absolute top-0 right-[2%] bg-neutral-800 border-2  border-neutral-700 h-[170px] w-[160px] rounded-md mt-[20px] pt-2 pl-3 opacity-90 flex-col`}>
        <CgCloseO className='text-white absolute right-4 top-3 ' onClick={closedrop}/>
 
        {
            usertype==='member' && <>
                <Link to='dashboard/cart'><p className=' hover:bg-neutral-700 hover:rounded-md hover:mr-1 transition-all duration-300 p-1 rounded-md px-2'>Cart</p></Link>
            </>    
        }
        {
            usertype==='trainer' && <>

                <Link to='/dashboard/dashboard'><p className=' hover:bg-neutral-700 hover:rounded-md hover:mr-1 transition-all duration-300 p-1 rounded-md px-2 hover:text-slate-200'>Dashboard</p></Link>
                
            </>    
        }
        
        <Link to='/dashboard/profile'><p className='hover:bg-neutral-700 hover:rounded-md hover:mr-1  transition-all duration-300 p-1 rounded-md px-2 hover:text-slate-200'>Profile</p></Link>
      <Link to='/dashboard/settings'><p className=' hover:bg-neutral-700 hover:rounded-md hover:mr-1 transition-all duration-300 p-1 rounded-md px-2'>Settings</p></Link>
        <p className='hover:bg-neutral-700 hover:rounded-md hover:mr-1  transition-all duration-300 p-1 rounded-md px-2' onClick={logout}>Logout</p>
    </div>
  )
}

export default DropDownMenu