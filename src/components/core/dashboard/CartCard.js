import React from 'react'
import ReactStars from 'react-stars'
import Button from '../../common/Button';
import { MdOutlineDelete } from "react-icons/md";
const CartCard = ({data}) => {
  console.log('data',data);
  return (
    <div className='flex flex-col sm:flex-row gap-3 justify-between border border-white h-[200px]  pr-5 items-center'>

       <div className='flex gap-2 h-full items-center'>
         <img src={data.img} alt={data.name} className='h-full w-[150px]' />
         <div>
           <h1>{data.name}</h1>
           <p>{}</p>
           <div>
             <span></span>
             <ReactStars count={3} color={'#ffd700'} size={24} />
           </div>
         </div>
       </div>

       <div>
         <button className='flex gap-1 px-2 border border-orange-500 hover:bg-transparent hover:text-orange-600 text-[20px] font-extralight items-center rounded-sm py-1 bg-orange-600 text-white '><MdOutlineDelete/>Remove</button>
         <p className='text-2xl text-yellow-400 '>₹{data.price}</p>
       </div>

    </div>
  )
}

export default CartCard