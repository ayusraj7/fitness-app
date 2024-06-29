import React from 'react'
import ClassesCard from './ClassesCard'
import Products from './Products'

const CAndP = () => {
  return (
    <div className='flex flex-col '>

        <div className=' w-[80%] mx-auto border-[#ab9999] border-b-2 '>
              <h1 className='font-Inter text-[#f7ffff] text-5xl font-extralight my-3'>Classes</h1>
              <div className='h-3 bg-[#ab9999] w-[35%]'></div>
        </div>
        <ClassesCard/>
        <div className=' w-[80%] mx-auto border-[#ab9999] border-b-2 mt-10 '>
              <h1 className='font-Inter text-[#f7ffff] text-5xl font-extralight my-3'>Products</h1>
              <div className='h-3 bg-[#ab9999] w-[35%]'></div>
        </div>
        <Products/>
        

        
        
    </div>
  )
}

export default CAndP