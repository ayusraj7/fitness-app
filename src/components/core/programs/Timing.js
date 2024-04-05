import React from 'react'
import Button from '../../common/Button'
import ClassesCard from './ClassesCard'

const Timing = () => {
  return (
    <div className='w-10/12 max-w-[1024px] mx-auto justify-around'>
         <div className=' border-[#ab9999] border-b-2 '>
                <h1 className='font-Inter text-[#f7ffff] text-4xl font-semibold my-3'>Timing and Classes</h1>
                <div className='h-3 bg-[#ab9999] w-[35%]'></div>
            </div>
         <div className='flex gap-3 mt-[50px] justify-center flex-wrap'>
             {/* 1st slot */}
             <div className='border border-gray-700 py-3 rounded-md w-[230px] flex items-center flex-col'>
                 <p className='text-gray-400 font-semibold hover:text-red-100'>MON-SAT</p>
                 <p className='font-bold text-red-200'>Gym</p>
                 <p className='text-sm text-[#bbd3d6]'>For Boys and Girls</p>
                 <p className='text-[#bbd3d6] text-[16px] text-center'>Timing: 8:00am - 11:00am  | <br/> 5:00pm - 10:00pm</p>
                 <p className='text-green-600 text-xl mb-1'><span className='text-xl pr-3 line-through text-gray-600'>$1000</span> $600</p>
                 <Button linkto={'/shop'} text={'Book now'} css={'bg-amber-300 text-slate-100 hover:scale-110 hover:bg-amber-200 text-slate-400'} wi={'w-fit'}/>
             </div>
             <div className='border border-gray-700 py-3 rounded-md w-[230px] flex items-center flex-col'>
                 <p className='text-gray-400 font-semibold hover:text-red-100'>MON-SAT</p>
                 <p className='font-bold text-red-200'>Gym + Cardio</p>
                 <p className='text-sm text-[#bbd3d6]'>For Boys</p>
                 <p className='text-[#bbd3d6] text-[16px] text-center'>Timing: 8:00am - 11:00am  | <br/> 5:00pm - 10:00pm</p>
                 <p className='text-green-600 text-xl mb-1'><span className='text-xl pr-3 line-through text-gray-600'>$1200</span> $800</p>
                 <Button linkto={'/shop'} text={'Book now'} css={'bg-amber-300 text-slate-100 hover:scale-110 hover:bg-amber-200 text-slate-400'} wi={'w-fit'}/>
             </div>
            
             
             <div className='border border-gray-700 py-3 rounded-md w-[230px] flex items-center flex-col'>
                 <p className='text-gray-400 font-semibold hover:text-red-100'>MON-SAT</p>
                 <p className='font-bold text-red-200'>Cardio</p>
                 <p className='text-sm text-[#bbd3d6]'>For Girls</p>
                 <p className='text-[#bbd3d6] text-[16px] text-center'>Timing: 8:00am - 11:00am  | <br/> 5:00pm - 10:00pm</p>
                 <p className='text-green-600 text-xl mb-1'><span className='text-xl pr-3 line-through text-gray-600'>$1000</span> $600</p>
                 <Button linkto={'/shop'} text={'Book now'} css={'bg-amber-300 text-slate-100 hover:scale-110 hover:bg-amber-200 text-slate-400'} wi={'w-fit'}/>
             </div> 
             
             <div className='border border-gray-700 py-3 rounded-md w-[230px] flex items-center flex-col'>
                 <p className='text-gray-400 font-semibold hover:text-red-100'>MON-SAT</p>
                 <p className='font-bold text-red-200'>Personal Training</p>
                 <p className='text-sm text-[#bbd3d6]'>For Girls And Boys</p>
                 <p className='text-[#bbd3d6] text-[16px] text-center'>Timing: 9:00am - 11:00am  | <br/> 8:00pm - 10:00pm</p>
                 <p className='text-green-600 text-xl mb-1'><span className='text-xl pr-3 line-through text-gray-600'>$5000</span> $3000</p>
                 <Button linkto={'/shop'} text={'Book now'} css={'bg-amber-300 text-slate-100 hover:scale-110 hover:bg-amber-200 text-slate-400'} wi={'w-fit'}/>
             </div> 
             <ClassesCard/>
         </div>
    </div>
  )
}

export default Timing