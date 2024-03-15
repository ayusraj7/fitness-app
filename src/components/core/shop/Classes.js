import React from 'react'

import cardio from '../../../asset/cardio.avif'
import training2 from '../../../asset/training2.jpg'
import strength from '../../../asset/training.jpg'
import weightloss from '../../../asset/weightloss.jpg'
import kickboxing from '../../../asset/kickboxing.jpg'
import ClassCard from './ClassCard'
const classes=[
    {
        img:strength,
        heading:'Muscle Building',
        for:'For Boys and Girls',
        timing:'8:00am-11:00am | 5:00pm-10pm',
        days:'Mon-Sat',
        duration:'1hr',
        price:'600'
    },
    {
        img:cardio,
        heading:'Muscle Building + Cardio',
        for:'For Boys',
        timing:'8:00am-11:00am | 5:00pm-10pm',
        days:'Mon-Sat',
        duration:'1hr',
        price:'600'
    },
    {
        img:training2,
        heading:'Cardio',
        for:'For Girls',
        timing:'8:00am-11:00am | 5:00pm-10pm',
        days:'Mon-Sat',
        duration:'1hr',
        price:'600'
    },
    {
        img:kickboxing,
        heading:'Personal Training',
        for:'For Boys and Girls',
        timing:'9:00am-11:00am | 8:00pm-11pm',
        days:'Mon-Sat',
        duration:'1hr 30min',
        price:'3000'
    }
]
const Classes = () => {
  return (
    <div className='bg-[#0a0a0a]'>
        <div className='flex w-10/12 gap-11 max-w-[1024px] mx-auto flex-col'>
            {/* 1st div  */}
            <div className='flex flex-col gap-3 mt-5'>
                <div className=' border-[#ab9999] border-b-2 '>
                    <h1 className='font-Inter text-[#f7ffff] text-5xl font-semibold my-3'>Classes we Offer</h1>
                    <div className='h-3 bg-[#ab9999] w-[35%]'></div>
                </div>
                <p className='font-semibold text-xl text-white'>In-Person in Jaitpur</p>
            </div>
            {/* 2nd div */}
            <div className='text-white flex  gap-6 pb-11 flex-col'>
                {
                    classes.map((element,index) => {
                        return (<ClassCard element={element} key={index}/>)
                    })
                }
            </div>

        </div>
    </div>
  )
}

export default Classes