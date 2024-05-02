import React from 'react'
import SideBar from '../components/common/SideBar'
import axios from 'axios'
import Loading from './Loading';
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom';
import Error from './Error'
import { useSelector} from 'react-redux';
import {useEffect,useState} from 'react';
import Footer from '../components/common/Footer';
import ProductSidebar from '../components/core/shop/ProductSidebar';
import Button from '../components/common/Button';


const SingleClass = () => {
    const {id}=useParams();
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState();
    const[error,setError]=useState(false);
    const{userData}=useSelector(state=>state.user);
    console.log('userData',userData);



  const fetchClass=async()=>{  
        try{     
                setLoading(true);
                const user=await axios.get(`https://fitness-app-0cqd.onrender.com/api/class/${id}`);
                console.log('user',user);
                if(!user.data.success)
                {
                    throw new Error(error);
                }
                
                setData(user.data.data[0]);
               
        }catch(error)
        {
            console.log('error-->',error);
            toast.error(`Blogs can't fetched`)
            setError(true);
        }
        setLoading(false);
        
    }
    
    useEffect(()=>{
    fetchClass();
    },[])

    if(loading)
    {
        return (<Loading text={'Product'} bgpresent={true}/>)
    }

    if(error){
        return (<Error text={'on getting the Product'}/>)
    }
  return (
    <div className='text-white bg-gradient-to-r from-pink-500 to-yellow-500 h-auto'>
        <div className='w-9/12 items-center flex flex-col gap-3 mx-auto pt-[60px]'>
            <img src={data?.img} alt={data?.name} className='rounded-md h-[300px] w-[80%]' />
            <h1 className='text-3xl text-white font-semibold'>{data?.name}</h1>
            <p className='text-gray-700 text-sm font-semibold'>{data?.preference}</p>
            <div className='w-[80%] flex flex-col gap-3'>
                <p className=' text-xl font-extralight'>{data?.description}</p>
                <div className='flex justify-between'>
                   <p className='text-lime-400'>Duration :<span className='text-red-800'>{data?.duration}</span></p>
                   <p className='w-[25%] text-lime-400'>Timing : <span className='text-red-800'>{data?.timing}</span></p>
                </div>
                <p className='text-gray-200'>Student Enrolled : <span className='text-blue-500'>{data?.studentEnrolled?.length?data?.studentEnrolled?.length:0}</span></p>
            </div>

            {
                !data?.studentEnrolled.includes(userData?._id) && userData?.accountType==='member' && <div>
                  <Button text={'Buy Now'} css={'text-white border border-white rounded-sm hover:bg-white hover:text-lime-500 '}/>
                </div>
            }



        </div>
        <Footer/>
    </div>
  )
}

export default SingleClass