import React from 'react'
import {useSelector} from 'react-redux'
import { FiEdit } from "react-icons/fi";
const Profile = () => {
    const {userData}=useSelector(state=>state.user);
    console.log('userDAta',userData);
  return (
    <div className='flex flex-col w-full gap-10 px-[60px] items-center  pb-10'>
        <h1 className='font-inter text-white font-extralight text-5xl mt-7'>My Profile</h1>
        <div className='flex flex-col gap-14 w-[85%] mx-auto mt-9'>

            <div className='border rounded-md border-neutral-500 w-full flex gap-3 justify-between p-5 items-center bg-neutral-600 px-[10%]'>
                <img src={userData?.additionalDetails?.img} alt={userData?.name} className='h-[100px] w-[100px] rounded-full ' /> 
                <div className='flex flex-col gap-1'>
                    <h1>{userData?.name}</h1>
                    <p>{userData?.email}</p>
                    <p>{userData?.mobileno}</p>
                </div>

            </div>

            <div className='rounded-md flex flex-col p-[5%] pb-10 px-[10%] gap-3 border border-neutral-500 bg-neutral-600'>
                    <div className='flex justify-between'>
                        <h1 className='text-gray-400  text-[20px] font-semibold'>About</h1>
                        <div className='flex gap-2 bg-yellow-300 rounded-sm px-3 py-1 text-blue-900 items-center'>
                            <p>Edit</p>
                            <FiEdit/>
                        </div>
                        
                    </div>
                    <p>{userData?.additionalDetails?.about?.length>0 ? userData?.additionalDetails?.about:'Fill the Details'}</p>
            </div>

            <div className='rounded-md flex flex-col p-[5%] pb-10 px-[10%] gap-3 border border-neutral-500 bg-neutral-600'>

                <div className='flex justify-between mt-7'>
                    <h1 className='text-[20px] font-semibold text-gray-400'>Personal Details</h1>
                    <div className='flex items-center bg-yellow-300 px-3 py-1 text-blue-900  rounded-sm gap-2 '>
                        <p>Edit</p>
                        <FiEdit/>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <p className='text-sm text-gray-400'>Name</p>
                    <p className='text-[18px] '>{userData?.name}</p>
                </div>

                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-sm text-gray-400'>Email</p>
                        <p>{userData?.email}</p>
                    </div>
                    <div className='flex flex-col '>
                        <p className='text-gray-400 text-sm'>Mobile No</p>
                        <p>{userData?.mobileno}</p>
                    </div>
                </div>
                

                <div className='flex justify-between'>
                    <div>
                        <p className='text-gray-400 text-sm'>Age</p>
                        <p>{userData?.additionalDetails?.age?.length>0 ? userData.additionalDetails.age : 'Fill the Details'}</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-400'>Gender</p>
                        <p>{userData?.additionalDetails?.gender?.length>0 ? userData.additionalDetails.gender :'Fill the Details'}</p>
                    </div>
                </div>



            </div>
        </div>

    </div>
  )
}

export default Profile