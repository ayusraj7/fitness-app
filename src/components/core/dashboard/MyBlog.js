import React from 'react'
import BlogContainer from '../../core/blog/BlogContainer'
import {MiEdit} from 'react-icons/mi'
const MyBlog = () => {
  return (
    <div className='w-full px-10 flex flex-col'>
        <div className=' relative border-[#ab9999] border-b-2 '>
                <h1 className='font-Inter text-[#f7ffff] text-4xl font-semibold my-3'>My Blogs</h1>
                <div className='h-3 bg-[#ab9999] w-[35%]'></div>
                <div>
                   <p>Edit</p>
                   <MiEdit/>
                </div>
        </div>
        <BlogContainer/>
    </div>
  )
}

export default MyBlog