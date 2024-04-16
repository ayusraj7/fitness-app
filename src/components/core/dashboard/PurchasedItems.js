import React from 'react'
import Products from './Products'

const PurchasedItems = () => {
  return (
    <div>
        <div className='flex w-[85%] px-10 mx-auto flex-col gap-3'>
                <div className=' border-[#ab9999] border-b-2 '>
                    <h1 className='font-Inter text-[#f7ffff]  text-5xl font-extralight '>Items Purchased</h1>
                    <div className='h-3 bg-[#ab9999] w-[35%] mt-2'></div>
                </div>
                <p className='font-semibold text-xl text-white'>For Fitness and Health</p>
        </div>
        <Products/>
    </div>
  )
}

export default PurchasedItems