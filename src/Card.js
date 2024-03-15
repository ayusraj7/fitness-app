import React from 'react'

const Card = ({img,desc,name,price,}) => {
    
  return (
    <div className='border-1 border  rounded-md h-[300px] w-[400px]'>
        <img src={img} alt="image"  className='  h-[100px] w-full'/>
       <div className='flex flex-col '>
           <p>{desc}</p>
           <h1>{name}</h1>
           <div>{price}</div>
           <div className='flex flex-row'>
               <div className='flex flex-col'>
                   <p>{name}</p>
                   <p>level 14</p>
               </div>
               <button>
                   Buy base
               </button>
           </div>
           
       </div> 
    </div>
  )
}

export default Card