import React from 'react'
import {useNavigate} from 'react-router-dom'

const BlogCard = ({data}) => {
  console.log('data',data._id)
  
  const text=data?.description.substr(0,300);
  const navigate=useNavigate();
  const goto=()=>{
    navigate(`/blog/${data._id}`)
  }

  
  return (
    <div className='hover:scale-[98%] transition-all duration-300 flex shadow-neutral-700 shadow-md flex-col items-center gap-1 text-white w-[290px] h-[320px] rounded-md ' onClick={goto}>
        <img src={data?.img} alt={data?.name} className='w-full h-[160px] rounded-t-md'/>
        <h1 className='font-italic font-semibold text-xl text-neutral-300'>{data?.name}</h1>
        <p className='mt-2 text-sm text-center text-lime-500'>{new Date(data?.updatedAt).toDateString().substr(4)}</p>
        <p className='px-2 text-gray-400 text-sm font-inter mt-1'>{text}...</p>
    </div>
  )
}

export default BlogCard