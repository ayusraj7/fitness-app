import React from 'react'

const Loading = ({text ,bgpresent}) => {
  console.log('text',text);
  return (
    <div className={`h-screen w-full flex items-center  ${!bgpresent?'bg-transparent':'bg-black'} justify-center`}>
        <div className='flex flex-col gap-3 items-center '>
            <span className="loader"></span>
            <p className='text-white text-4xl'>{text} Loading...</p>
        </div>
    </div>
  )
}

export default Loading