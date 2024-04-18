import React from 'react'
import SideBar from '../components/common/SideBar'
import axios from 'axios'
import Loading from './Loading';
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom';
import Error from './Error'
import { useSelector,useDispatch } from 'react-redux';
import {useEffect,useState} from 'react';
import Footer from '../components/common/Footer';
import ProductSidebar from '../components/core/shop/ProductSidebar';
import {setLoading} from '../reducer/slices/userSlice'

const SingleClass = () => {
    const {id}=useParams();
    const dispatch=useDispatch();
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState();
    const[error,setError]=useState(false);


  const fetchBlog=async()=>{
            
        try{     
                dispatch(setLoading(true));
                const user=await axios.get(`https://fitness-app-0cqd.onrender.com/api/product/${id}`);
                console.log('user',user);
                setData(user.data.data[0]);
                dispatch(setLoading(false));
        }catch(error)
        {
            
            console.log('error',error);
            toast.error(`Blogs can't fetched`)
            setError(true);
        }
        dispatch(setLoading(false));
        
    }

    useEffect(()=>{
    // fetchBlog();
    },[])

    if(loading)
    {
        return (<Loading text={'Product'} bgpresent={true}/>)
    }
    if(error){
        return (<Error text={'on getting the Product'}/>)
    }
  return (
    <div className='text-white bg-black h-screen'>
        <div className='w-10/12 mx-auto border border-white pt-[100px]'>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default SingleClass