import React from 'react'
import { GoVerified } from "react-icons/go";
import Button from '../../common/Button';

const ProductCard = ({element}) => {
  return (
    <div className='border w-[240px]  border-gray-700 rounded-sm flex flex-col items-start gap-1 pb-4'>
      <img src={element.img} alt={element.name} className='h-full w-full object-contain rounded-t-sm ' />
      <h1 className='px-2 text-xl font-bold text-gray-300'>{element.name}</h1>
      <p className='px-2 text-sm text-gray-500'>{element.description}</p>
      <p className=' px-2 flex gap-8 justify-between text-lime-500'><span className='line-through text-white'>₹{element.realprice}</span>₹{element.price}</p>
      <div className='flex justify-between pl-2 gap-5 text-[16px]'>
        <Button text={'Buy Now'} css={'border border-gray-300 text-white hover:bg-white hover:text-black font-semibold rounded-sm'}/>
        <Button text={'Add To Cart'} css={'border border-gray-300 text-white hover:bg-white hover:text-black font-semibold rounded-sm'}/>
      </div>
    </div>
  )
}

export default ProductCard