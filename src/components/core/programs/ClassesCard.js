import React from 'react'
import Button from '../../common/Button'
import {useNavigate} from 'react-router-dom'
const ClassesCard = () => {
    const navigate=useNavigate();
  return (
    <div className='border border-gray-700 py-3 rounded-md w-[230px] flex items-center flex-col'>
        <p className='text-gray-400 font-semibold hover:text-red-100'>MON-SAT</p>
        <p className='font-bold text-red-200'>Gym</p>
        <p className='text-sm text-[#bbd3d6]'>For Boys and Girls</p>
        <p className='text-[#bbd3d6] text-[16px] text-center'>Timing: 8:00am - 11:00am  | <br/> 5:00pm - 10:00pm</p>
        <p className='text-green-600 text-xl mb-1'><span className='text-xl pr-3 line-through text-gray-600'>$1000</span> $600</p>
        <Button text={'Book now'} css={'bg-amber-300 text-slate-100 hover:scale-110 hover:bg-amber-200 text-slate-400'} onclick={()=>navigate('/shop')} wi={'w-fit'}/>
    </div>
  )
}

export default ClassesCard