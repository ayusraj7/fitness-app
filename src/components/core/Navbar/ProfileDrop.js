import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import DropDownMenu from './DropDownMenu';
import {setShowing} from '../../../reducer/slices/DropMenu'
import { FaCartShopping } from "react-icons/fa6";

const ProfileDrop = () => {
    const {userData}=useSelector(state=>state.user);

    const img=userData?.additionalDetails?.img;
  
    const{show}=useSelector(state=>state.dropMenu)

    const dispatch=useDispatch();
    const showdrop = ()=>{
      dispatch(setShowing(!show));
    }

  return (
    <div className='flex items-center gap-3' >

        <FaCartShopping/>

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