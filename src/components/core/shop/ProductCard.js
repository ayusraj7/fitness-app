import React from 'react'
import Button from '../../common/Button';
import {useNavigate} from 'react-router-dom'

const ProductCard = ({element}) => {
  console.log('element-->',element);
  const navigate=useNavigate();
  const goto=()=>{
    
    navigate(`/product/${element._id}`);
  }

  return (
    <div className='border w-[240px] h-[350px] border-gray-700 rounded-sm flex flex-col items-start justify-between gap-1 pb-4' onClick={goto}>
      <img src={element.img} alt={element.name} className='h-[150px] w-[240px] rounded-t-sm ' />
      <h1 className='px-2 text-xl font-bold text-gray-300'>{element.name}</h1>
      <p className='px-2 text-sm text-gray-500'>{element.description.substr(0,100)}...</p>
      <p className=' px-2 flex gap-8  text-lime-500'><span className='line-through text-white'>₹{element.price+300}</span>₹{element.price}</p>
      <div className='flex justify-between pl-2 gap-5 text-[16px]'>
        <Button text={'Buy Now'} css={'border border-gray-300 text-white hover:bg-white hover:text-black font-semibold rounded-sm'}/>
        <Button text={'Add To Cart'} css={'border border-gray-300 text-white hover:bg-white hover:text-black font-semibold rounded-sm'}/>
      </div>
    </div>
  )
}

export default ProductCard