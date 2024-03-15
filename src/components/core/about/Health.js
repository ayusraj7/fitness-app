import React from 'react'
import photo1 from '../../../asset/health1.png'
import photo2 from '../../../asset/health2.png'
import photo4 from '../../../asset/health4.png'


const Health = () => {
  return (
    <div className=' w-full pt-[60px] border-y-[7px] border-[#e12020] pb-8'>
       
       <div className='md:w-8/12 ml-[8%]'>
        <h1 className='text-[20px] py-3 font-semibold text-[#384081]'>80% OF STAYING FIT IS <span className='text-[#f15f5f] '>FOOD</span></h1>
        <div className='h-1 ml-1 w-[100px] bg-[#f60000] '></div>
        <div className='mt-8'>
            <h1 className='text-[#2a3281] text-[30px]  font-bold'>HEALTH & NUTRITION</h1>
            <div className='mt-6 text-[#535b6c] w-[90%] flex flex-col gap-8 '>
                <p className='text-[18px] md:text-[21px]'>Everyday food choices are guided by a number of considerations--emotions,habits,fast-paced
                    lifestyles,traditions,social influences,religion,and pleasure. Let me help you feel confident in your diet choices while still 
                    enjoying the foods that you love with one-on-one nutrition counseling sessions. Whether your goal is to lose weight, lower cholesterol,
                    or optimize your health, having me as your private nutrition coach provides the support you need to stay on track and keep yourself 
                    motivated.
                </p>
                <div className='flex gap-8'>
                    <div className='flex flex-col gap-1 items-center cursor-pointer'>
                       <img src={photo1} alt="" width={40} height={40}/>
                       <p className='text-[13px] text-[#001c8b] font-bold cursor-pointer'>PREMIUM HEALTH</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center cursor-pointer'>
                       <img src={photo2} alt="" width={40} height={40}/>
                       <p className='text-[13px] text-[#001c8b] font-bold cursor-pointer'>QUALITY NUTRITION</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center cursor-pointer'>
                       <img src={photo4} alt="" width={40} height={40}/>
                       <p className='text-[13px] font-bold text-[#001c8b] cursor-pointer'>MEAL PLANS</p>
                    </div>
                    
                </div>
                <p className='text-[18px]'>As part of all of my training programs, you'll work one-on-one with me as your nutrition coach to develop
                    a plan that meets you where you're starting, no matter what your goal or your experience level is.
                </p>
            </div>
        </div>
       </div>

    </div>
  )
}

export default Health