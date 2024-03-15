import React from 'react'
import image1 from '../../../asset/gym1.jpeg'
import image2 from '../../../asset/gym2.jpeg'
import image3 from '../../../asset/gym3.jpeg'
import image4 from '../../../asset/gym4.jpeg'
const Motivation = () => {
  return (
    <div className='bg-[#0a0a0a]'>
        <div className='w-10/12 mx-auto lg:h-[150vh] flex gap-5 flex-col pt-11'>
            <div className='mt-10 gap-4  sm:gap-2 flex flex-col items-center text-[rgb(255,255,255)]'>
                <h1 className='text-center text-4xl leading-9 sm:leading-[55px] sm:text-[50px] font-[cabin]'>Push Your limit. Anywhere.Anytime</h1>
                <p className=' text-center sm:text-left text-sm text-[rgb(255,255,255)] '>Your favorite workouts, available at affordable price.</p>
            </div>
            <div className='mt-12 lg:block hidden relative'>
                <img src={image1} alt=""  className=' boxshad top-[-2%] right-[20%] absolute w-[750px] h-400px] border-[22px] rounded-lg border-[#000000] '/>
                <img src={image2} alt="" className=' boxshad absolute right-[6%] top-[260px] z-30 w-[500px] h-[370px] rounded-lg border-[#000000] border-[18px]  '/>
                <div className=' bg-gray-500 absolute right-[5%] top-[620px] z-30 w-[525px] h-[18px] [border-radius:20px] '></div>
                <img src={image3} alt=""  className='boxshad z-40 top-[270px] left-[-20px] w-[450px] h-[300px] absolute border-x-[35px] border-y-[17px] border-[#000000] rounded-lg '/>
                <img src={image4} alt=""  className='boxshad absolute left-[360px] top-[470px] z-50 w-[130px] h-[220px] border-[15px] border-y-[25px] rounded-lg border-[#000000]'/>
                <p className='h-[8px] w-[8px] rounded-md opacity-20 bg-white top-[420px] left-[-8px] z-50  absolute  '></p>
                <p className='h-[8px] w-[8px] rounded-md opacity-20 bg-white top-[478px] left-[420px] z-50  absolute  '></p>
                <p className='h-[8px] w-[8px] rounded-md bg-white top-[265px] left-[950px] z-50 opacity-20 absolute  '></p>
            </div>
        </div>
    </div>
  )
}

export default Motivation