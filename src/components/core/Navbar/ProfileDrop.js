import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import DropDownMenu from './DropDownMenu';
import {setShowing} from '../../../reducer/slices/DropMenu'
import { FaCartShopping } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const ProfileDrop = () => {
    const {userData}=useSelector(state=>state.user);
    const {totalItems}=useSelector(state=>state.cart);

    const img=userData?.additionalDetails?.img;
  
    const{show}=useSelector(state=>state.dropMenu)

    const dispatch=useDispatch();
    const showdrop = ()=>{
      dispatch(setShowing(!show));
    }

  return (
    <div className='flex items-center gap-3' >

        {
          userData?.accountType==='member' && <Link to='/dashboard/cart' className='relative'>
          <span className='absolute text-[11px] -top-2 right-0 px-1 flex items-center text-white bg-green-600 rounded-full w-[13px] h-[13px]'>{totalItems}</span>
          <FaCartShopping/>
          </Link>
        }

        

        <div className='flex items-center justify-center' onClick={showdrop}>
          
          <img src={img} alt=""  className='h-9 w-9 rounded-full bg-transparent text-white'/>
          
        </div>
        
        

        {
            show && <DropDownMenu />
        }
    </div>

     
  )
}

export default ProfileDrop