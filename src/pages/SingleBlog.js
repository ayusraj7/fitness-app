import React from 'react'
import {useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import Loading from './Loading';
import toast from 'react-hot-toast'
import Footer from '../components/common/Footer'
import { useParams,useNavigate} from 'react-router-dom';
import SideBar from '../components/common/SideBar';
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const SingleBlog = () => {
    const {id}=useParams();
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState();
    const navigate=useNavigate();
    const{userData}=useSelector(state=>state.user);
  console.log('userData',userData);


  const fetchBlog=async()=>{
            
    try{     
            setLoading(true);
            const user=await axios.get(`https://fitness-app-0cqd.onrender.com/api/blog/${id}`);
            
            setData(user.data.data[0]);
            setLoading(false);
    }catch(error)
    {
        console.log('error',error);
        toast.error(`Blogs can't fetched`)
    }
    setLoading(false);
    
}

useEffect(()=>{
fetchBlog();
},[])



const goto=()=>{
  
  navigate(`/blogs/?=${data?.creator?._id}`);
}
  

  


  return (
    <div className='bg-gray-200'>
    <div className=' h-auto lg:px-[100px] px-5 gap-8 pt-6 flex justify-between'>

        

        {
            loading ? <Loading text={'Blog'} bgpresent={true} /> : <>
            <div className=' text-white flex flex-col gap-3 items-center md:w-[65%] lg:w-[80%]'>
            <img src={data?.img} alt="" className=' hover:shadow-white hover:shadow-sm  h-[360px] w-full rounded-lg' />
            <div className=' mt-5 flex justify-between w-full  '>
              <h1 className='text-blue-800 text-4xl'>{data?.name}</h1>
              {
                userData?.accountType==='trainer'&& userData?._id===data?.creator?._id && 
                          <div className='flex gap-1 items-center '>
                            <FiEdit size={30} className='text-green-700'/>
                            <MdDelete size={32} className='text-orange-500'/>
                          </div>
              }
            </div>
            <div className='mt-8 flex flex-col gap-6 '>
                <div className='flex justify-between w-[90%] '>
                    <p  className='text-orange-500 text-xl'>Author: <span onClick={goto} className='rounded-md font-bold  hover:text-black text-blue-900'>{data?.creator?.name}</span></p>
                    <p className='text-xl text-orange-500'>Ago</p>
                </div>
                <p className='text-[20px] text-[#666666] md:w-[80%]'>{data?.description}</p>
            </div>
            </div>
            <SideBar/>
            </>
        }

        


    </div>
    <Footer/>
    </div>
  )
}

export default SingleBlog