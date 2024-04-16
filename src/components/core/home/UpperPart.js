import React from 'react'
import gymimg from '../../../asset/training4.jpg'
import Button from '../../common/Button'
const UpperPart = () => {
  return (
    <div className='bg-[rgb(15,11,32)]  w-screen md:h-full h-[115vh]'>
        <div className='flex md:flex-row  flex-col max-w-[1024px] h-[calc(100vh-60px)] md:px-0 px-3 md:w-10/12 mx-auto md:gap-0 gap-11 md:pt-0 pt-8 '>
            <div className='md:w-[60%] flex flex-col justify-center gap-5 relative'>
                <p className='w-fit border-b-8 border-red-700 inline-block font-semibold text-red-700'>THE FITNESS</p>
                <h1 className='text-white font-bold  leading-[35px] sm:leading-[60px] text-2xl sm:text-3xl md:text-[45px]'>BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE</h1>
                <Button  text={'BECAME A MEMBER'} css={'bg-red-600 text-white font-semibold py-[10px] px-4 text-sm rounded-none'}/>
            </div>
            <div className=' md:w-[45%] vignette'>
                <img src={gymimg} alt="bodyBuilding" className='fit-cover  md:w-[80%] w-full h-[350px] md:h-[60%] md:rounded-full md:mt-[130px]  loading-lazy' />
            </div>
        </div>
    </div>
  )
}

export default UpperPart
