import React from 'react'
import ReactStars from 'react-stars'
import Button from '../../common/Button';
import { MdOutlineDelete } from "react-icons/md";
const CartCard = ({data}) => {
  
  return (
    <div className='flex flex-col sm:flex-row gap-3 justify-between bg-white sm:h-[200px] rounded-md sm:pr-5 items-center'>

       <div className='flex justify-between sm:flex-row flex-col gap-2 text-black h-[200px] sm:h-full items-center w-full sm:w-[60%] '>
         <img src={data.img} alt={data.name} className='h-[120px] sm:h-full w-full sm:w-[150px] pr-5  lg:w-[220px] rounded-l-md  ' />
         <div>
           <h1>{data.name}</h1>
           <p>{}</p>
           <div>
             <span></span>
             <ReactStars count={3} color={'#ffd700'} size={24} />
           </div>
         </div>
       </div>

       <div className='flex flex-col gap-3 rounded-sm'>
         <button className='flex gap-1 px-2 border border-orange-500 hover:bg-transparent hover:text-orange-600 text-[20px] font-extralight items-center rounded-sm py-1 bg-orange-600 text-white '><MdOutlineDelete/>Remove</button>
         <p className='text-2xl text-blue-900 '>₹{data.price}</p>
       </div>

    </div>
  )
}

export default CartCard