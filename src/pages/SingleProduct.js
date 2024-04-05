import React from 'react'
import SideBar from '../components/common/SideBar'
import axios from 'axios'
import Loading from './Loading';
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom';
import Error from './Error'
import {useEffect,useState} from 'react';
import Footer from '../components/common/Footer';

const SingleProduct = () => {

    const {id}=useParams();
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState();
    const[error,setError]=useState(false);


  const fetchBlog=async()=>{
            
        try{     
                setLoading(true);
                const user=await axios.get(`http://localhost:4000/api/product/${id}`);
                console.log('user',user);
                setData(user.data.data[0]);
                setLoading(false);
        }catch(error)
        {
            
            console.log('error',error);
            toast.error(`Blogs can't fetched`)
            setError(true);
        }
        setLoading(false);
        
    }

    useEffect(()=>{
    fetchBlog();
    },[])

    if(loading)
    {
        return (<Loading text={'Product'} bgpresent={true}/>)
    }
    if(error){
        return (<Error text={'on getting the Product'}/>)
    }


  return (
    <div className='bg-gradient-to-r from-pink-500 to-yellow-500 '>
        <div className=' h-auto  px-[100px] pt-11 flex  justify-evenly'>
            
                <div className=' text-white flex flex-col gap-3  w-[60%]'>
                    <img src={data?.img} alt="" className='  h-[360px]  w-full rounded-lg' />
                    <h1 className='text-white  text-4xl mt-3'>{data?.name}</h1>
                        <div className='mt-8 flex flex-col gap-4 w-[90%]'>
                            <div className='flex gap-3 justify-between'>
                                
                                <p className='text-lime-400 text-[20px]'>Price: <span className='line-through text-red-700'>{data?.price+200}</span> <span className='text-lime-400'>{data?.price}</span></p>
                                <p className='text-xl font-bold text-blue-900'>{data?.seller?.name}</p>
                            </div>
                            <p className='text-[20px] text-white md:w-[90%]'>{data?.description}</p>
                        </div>
                </div>
                <SideBar/>
        </div>
        <Footer/>
    </div>
  )
}

export default SingleProduct