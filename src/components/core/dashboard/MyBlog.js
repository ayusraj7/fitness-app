import React from 'react'
import BlogContainer from '../../core/blog/BlogContainer'
import {MdAdd} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
const MyBlog = () => {
    const navigate=useNavigate();
  return (
    <div className='w-full px-10 flex flex-col'>
        <div className=' relative border-[#ab9999] border-b-2 '>
                <h1 className='font-Inter text-[#f7ffff] text-4xl font-semibold my-3'>My Blogs</h1>
                <div className='h-3 bg-[#ab9999] w-[35%]'></div>
                <div onClick={()=>navigate('/dashboard/addBlog')} className='sm:right-2 sm:top-6 top-[85px] absolute flex gap-1 items-center bg-yellow-300 rounded-sm px-3 py-1 text-orange-600' >
                   <p>Add Blog</p>
                   <MdAdd/>
                </div>
        </div>
        <BlogContainer/>
    </div>
  )
}

export default MyBlog