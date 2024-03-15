import React from 'react'
import TeamCard from './TeamCard'
import img1 from '../../../asset/gym6.jpg'
import img2 from '../../../asset/gym2.jpg'
import img3 from '../../../asset/gym3.jpg'
import img4 from '../../../asset/gym4.jpg'

const trainer=[
    {
        img:img1,
        name:'Bobby Dhillon',
        type:'Trainer',
        desc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sunt aspernatur odio hic delectus eveniet sed nobis architecto, possimus repellendus accusantium quidem reiciendis quod ab labore exercitationem quam repellat vel culpa reprehenderit facere. Magni iure ut perferendis modi nisi doloribus placeat iusto dolorem, deserunt atque voluptas natus fugiat cumque distinctio magnam at tenetur dignissimos corrupti error, similique quod! Aliquam, et!`
    },
    {
        img:img2,
        name:'Gyani Thakur',
        type:'Trainer',
        desc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sunt aspernatur odio hic delectus eveniet sed nobis architecto, possimus repellendus accusantium quidem reiciendis quod ab labore exercitationem quam repellat vel culpa reprehenderit facere. Magni iure ut perferendis modi nisi doloribus placeat iusto dolorem, deserunt atque voluptas natus fugiat cumque distinctio magnam at tenetur dignissimos corrupti error, similique quod! Aliquam, et!`
    },
    {
        img:img3,
        name:'Natti Dhillon',
        type:'Trainer',
        desc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sunt aspernatur odio hic delectus eveniet sed nobis architecto, possimus repellendus accusantium quidem reiciendis quod ab labore exercitationem quam repellat vel culpa reprehenderit facere. Magni iure ut perferendis modi nisi doloribus placeat iusto dolorem, deserunt atque voluptas natus fugiat cumque distinctio magnam at tenetur dignissimos corrupti error, similique quod! Aliquam, et!`
    }
]

const Team = () => {
  return (
    <div className='bg-white flex flex-col  text-white w-full sm:p-5 '>
        
        <div className='w-11/12 md:w-8/12 mx-auto h-full  flex flex-col  gap-3 md:p-2 mt-10'>
            {/* headline */}
            <div className=' border-[#6b6060] border-b-2 '>
                <h1 className='font-Inter text-red-800 text-5xl font-semibold my-3'>The Trainers</h1>
                <div className='h-3 bg-[#a69494] w-[35%]'></div>
            </div>

            {/* body */}
            <div className='h-full w-full relative bg-transparent font-mono text-zinc-300 flex flex-col gap-10 mt-11 sm:mt-[80px] md:pb-0 pb-7 '>
                {
                    trainer.map((ele,index)=>(
                        <TeamCard key={index} name={ele.name} type={ele.type} desc={ele.desc} img={ele.img}/>
                    ))
                }
            </div>
        </div>
    
    </div>
  )
}

export default Team