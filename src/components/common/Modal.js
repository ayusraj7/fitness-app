import React from 'react'
import Button from './Button'

const Modal = ({data}) => {
  console.log('data',data);
  return (
    <div className='flex items-center justify-center bg-opacity-10 h-screen w-screen backdrop-blur-sm z-[1000]'>
        <div className="w-11/12 max-w-[350px] rounded-lg border border-[#6e727f] bg-[#161d29] p-6">
            <p className="text-2xl font-semibold text-[#f1f2ff]">
            {data?.text1}
            </p>
            <p className="mt-3 mb-5 leading-6 text-[#999daa]">
            {data?.text2}
            </p>
            <div className="flex items-center gap-x-4">
               <Button text={'hello'} css={`bg-yellow-300 cursor-pointer rounded-md py-[8px] px-[20px] font-semibold text-[#000814]`}/>
               <Button text={'Log in'} css={"cursor-pointer rounded-md bg-[#999daa] py-[8px] px-[20px] font-semibold text-[#000814]"}/>
      
            </div>
      </div>
    </div>
  )
}

export default Modal