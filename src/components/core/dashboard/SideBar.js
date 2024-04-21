import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { CgGym } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { VscDashboard } from "react-icons/vsc";
import {useLocation,matchPath,useNavigate} from 'react-router-dom'
import { setToken,setUserData } from '../../../reducer/slices/userSlice';
import toast from 'react-hot-toast'
import { MdOutlineArrowDropDown } from "react-icons/md";
import Modal from '../../common/Modal';
const SideBar = () => {
  const[showModal,setModal]=useState(null)
  const dispatch=useDispatch();

  const location=useLocation();
  const navigate=useNavigate();
  
  const matchRoute=(route)=>{
    return matchPath({path:route},location.pathname);
  }
 
  const [open,setOpen]=useState(false);

  const {userData}=useSelector(state=>state.user);

  const logout=(e)=>{
    e.stopPropagation();
       setModal({
         text1:"Are You Sure",
         text2:"You will be logged out of your account",
         btn1Text:"LogOut",
         btn2Text:"Cancel",
         btn1Handler:()=>{dispatch(setToken(null));
          dispatch(setUserData(null));
          localStorage.removeItem('token');
          localStorage.removeItem('userData');
          toast.success("Logged Out");
          navigate('/');},
         btn2Handler:()=>setModal(null),
       });  
    
  }
 
  const id=userData?._id;
  return (
    <div className='sm:w-[25%] sm:h-screen h-[390px] w-full md:w-[20%] border-x border-gray-800 shadow-sm overflow-y-hidden bg-neutral-600 shadow-gray-200 flex gap-9 flex-col pl-8 '>
        <div className='mt-2 sm:mt-7 flex items-center gap-3 '>
            <Link to='/'><CgGym size={34} className='text-orange-600'/></Link>
            <p className='font-extralight text-xl'>The Fitness</p>
        </div>
        
        {
            userData?.accountType==='member' && 
              <div className='flex flex-col text-[20px] gap-2 justify-center font-extralight text-gray-400'>
                <Link to='/dashboard/profile' className={`flex items-center gap-2 ${matchRoute('/dashboard/profile')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`} ><CgProfile/><p>Profile</p></Link>
                  <Link to='/dashboard/cart' className={`flex items-center gap-2 ${matchRoute('/dashboard/cart')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`} ><FaShoppingCart/><p>Cart</p></Link>
                  <Link to='/dashboard/purchased-items' className={`flex items-center gap-2 ${matchRoute('/dashboard/purchased-items')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`}><BiSolidPurchaseTag/><p>Purchased Items</p></Link>
                  <Link to='/dashboard/enrolled-classes' className={`flex items-center gap-2 ${matchRoute('/dashboard/enrolled-classes')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`}><MdClass/><p>Enrolled Classes</p></Link>
              </div>
        }
        
        {
            userData?.accountType==='trainer' && 
              <div className='flex flex-col text-[20px] gap-2 justify-center font-extralight text-gray-400'>
                  <Link to='/dashboard/profile' className={`flex items-center gap-2 ${matchRoute('/dashboard/profile')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`} ><CgProfile/><p>Profile</p></Link>
                  <Link to='/dashboard/dashboard' className={`flex items-center gap-2 ${matchRoute('/dashboard/dashboard')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`} ><VscDashboard/><p>Dashboard</p></Link>
                  <Link to='/dashboard/classes-products'className={`flex items-center gap-2 ${matchRoute('/dashboard/classes-products')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`} ><BiSolidPurchaseTag/><p>Classes & Products</p></Link>
                  <p onClick={()=>navigate(`/dashboard/blogs/?=${id}`)} className={`flex items-center gap-2 ${matchRoute('/dashboard/blogs')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`} ><FaBlogger/><span>My Blogs</span></p>
                  <div onClick={()=>setOpen(!open)} className='flex items-center '>Create <MdOutlineArrowDropDown size={30} /> </div>
                  {
                    open && <>
                    <Link to='dashboard/addClass' className={`flex items-center gap-2 ${matchRoute('/dashboard/addClass')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`}><MdAdd/><p>Add Class</p></Link>
                    <Link to='dashboard/addProduct' className={`flex items-center gap-2 ${matchRoute('/dashboard/addProduct')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`}><MdAdd/><p>Add Product</p></Link>
                    <Link to='dashboard/addBlog' className={`flex items-center gap-2 ${matchRoute('/dashboard/addBlog')?' bg-yellow-300 text-orange-600 w-[80%] px-2 rounded-sm ':''}`}><MdAdd/><p>Add Blog</p></Link>
                    </>
                  }
              </div>
        }
        <div className='border-t border-gray-400 py-2 flex flex-col text-xl gap-2 w-[80%] text-gray-400 font-extralight '>
          <Link to='/dashboard/settings' className={`flex items-center  gap-2 ${matchRoute('/dashboard/settings')?' bg-yellow-300 text-orange-600 w-[100%] py-[3px] px-1 rounded-sm ':''}`}><IoSettings/><p>Settings</p></Link>
          <p to='/dashboard/logout' onClick={logout} className={`flex items-center  gap-2   w-[90%] py-[3px] pl-1 rounded-sm `}><IoLogOut/><span>Logout</span></p>

        </div>
        {
          showModal && <Modal modalData={showModal}/>
        }
        
    </div>
  )
}

export default SideBar