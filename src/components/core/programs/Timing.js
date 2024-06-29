import React,{useState,useEffect} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Button from '../../common/Button'
import ClassesCard from './ClassesCard'
import Loading from '../../../pages/Loading'

const Timing = () => {
    const[classes,setClasses]=useState(null);
    const[loading,setLoading]=useState(false);
    
    const fetchClasses=async()=>{
        setLoading(true);
        try{
          const user=await axios.get(process.env.REACT_APP_BACKEND_URL+'/api/getClasses');
          setClasses(user.data.data);
        }catch(error){
          toast.error('Error in Fetching Classes')
        }
        setLoading(false);
      }
    
      useEffect(()=>{
        fetchClasses();
      },[])

      if(loading)
      {
          return (<Loading text={'Classes'}></Loading>)
      }
  return (
    <div className='w-10/12 max-w-[1024px] mx-auto justify-around'>
         <div className=' border-[#ab9999] border-b-2 '>
                <h1 className='font-Inter text-[#f7ffff] text-4xl font-semibold my-3'>Timing and Classes</h1>
                <div className='h-3 bg-[#ab9999] w-[35%]'></div>
            </div>
         <div className='flex gap-3 mt-[50px] justify-center flex-wrap'>
             {/* 1st slot */}
             {
                 !loading && classes?.map((element,index)=>{
                     return (<ClassesCard data={element} key={index}/>)
                 })
             }
             
         </div>
    </div>
  )
}

export default Timing