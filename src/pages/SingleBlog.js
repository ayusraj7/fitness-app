import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios'
import Loading from './Loading';
import toast from 'react-hot-toast'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router-dom';
import SideBar from '../components/common/SideBar';

const SingleBlog = () => {
    const {id}=useParams();
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState();


  const fetchBlog=async()=>{
            
    try{     
            setLoading(true);
            const user=await axios.get(`http://localhost:4000/api/blogs/${id}`);
            console.log('user',user);
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

  


  return (
    <div className='bg-gray-200'>
    <div className=' h-auto px-[100px] pt-6 flex justify-between'>

        

        {
            loading ? <Loading text={'Blog'} bgpresent={true} /> : <>
            <div className=' text-white flex flex-col gap-3 items-center '>
            <img src={data?.img} alt="" className='mt-2 hover:shadow-white hover:shadow-sm  h-[360px] w-full rounded-lg' />
            <h1 className='text-blue-800 text-4xl  mt-5'>{data?.name}</h1>
            <div className='mt-8 flex flex-col gap-6 '>
                <div className='flex justify-between w-[90%] '>
                    <p className='text-orange-500 text-xl'>Author: {data?.creator?.name}</p>
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