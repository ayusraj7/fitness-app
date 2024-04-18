import React,{useState,useEffect} from 'react'
import ClassCard from '../shop/ClassCard'
import toast from 'react-hot-toast'
import axios from 'axios'
import Loading from '../../../pages/Loading'
import { useSelector } from 'react-redux'
import Button from '../../common/Button'
import { useNavigate } from 'react-router-dom'


const ClassesCard = () => {
    const[classes,setClasses]=useState(null);
    const[loading,setLoading]=useState(false);
    const{userData,token}=useSelector(state=>state.user);
    const navigate=useNavigate();
    const id=userData._id;
    let url='';
    if(userData?.accountType==='member')
    {
        url=`https://fitness-app-0cqd.onrender.com/api/memberclasses/${id}`
    }else
    {
        url=`https://fitness-app-0cqd.onrender.com/api/getClasses/${id}`
    }

    const fetchClasses=async()=>{
        setLoading(true);
        try{
          const user=await axios.post(url,{token});
          if(userData?.accountType==='trainer')
          {
            setClasses(user?.data?.data);
          }else{
            setClasses(user?.data?.data?.product);
          }
          
        }catch(error){
          console.log('error',error);
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
    <div className='flex w-[80%] mt-[80px] gap-11 mx-auto flex-col'>
       
            
            <div className='text-white flex  gap-6 pb-11 flex-col'>
                {
                    classes?.map((element,index) => {
                        return (<ClassCard element={element} key={index}/>)
                    })
                }
            </div>
            {
                    !classes && <div className='text-white flex flex-col gap-8 items-center'>
                        <h1 className='text-4xl font-extralight text-center'>No Classes Purchased</h1>
                        <Button text={'Buy Classes'} css={`mt-[200px] border rounded-sm hover:bg-white hover:text-black`} onclick={()=>navigate('/shop')}/>
                    </div>
                }

       
    </div>
  )
}

export default ClassesCard