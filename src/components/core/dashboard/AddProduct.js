import React from 'react'
import UploadPhoto from './UploadPhoto'

const AddProduct = () => {
  return (
    <div>

        <div className='flex flex-col '>
            <div className=' w-[80%] mx-auto border-[#ab9999] border-b-2 '>
                <h1 className='font-Inter text-[#f7ffff] text-5xl font-extralight my-3'>Create Product</h1>
                <div className='h-3 bg-[#ab9999] w-[35%]'></div>
                
            </div>
            <div className='w-[85%] flex flex-col mx-auto gap-10 mt-6'>
              <UploadPhoto/>
              <div className='bg-neutral-600 p-5 h-[500px] w-[80%] mx-auto'>
                <input type="text" name="" id="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct