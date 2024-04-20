import React,{useEffect, useState} from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import toast from 'react-hot-toast'
import Loading from '../../../pages/Loading'


const Products = () => {
    const[products,setProductData]=useState('');

    const fetchProducts=async()=>{
        try{                  
                const user=await axios.get('https://fitness-app-0cqd.onrender.com/api/products');
                if(!user.data.success)
                {
                    throw new Error(user.data.message);
                }
                setProductData(user.data.data);

        }catch(error)
        {
            console.log('error',error);
            toast.error(`Products can't be fetched`);
        }
}

useEffect(()=>{
fetchProducts();
},[])

  return (
    <div > 
        <div className='bg-[#0a0a0a] h-auto pb-8 relative'>
            <div className='flex w-11/12  lg:w-10/12 gap-11 max-w-[1024px] mx-auto flex-col '>
                {/* 1st div  */}
                <div className='flex flex-col gap-3 mt-5'>
                    <div className=' border-[#ab9999] border-b-2 '>
                        <h1 className='font-Inter text-[#f7ffff] text-5xl font-semibold my-3'>Products we Sell</h1>
                        <div className='h-3 bg-[#ab9999] w-[35%]'></div>
                    </div>
                    <p className='font-semibold text-xl text-white'>Supplement and Merchandise</p>
                </div>
                {/* 2nd div */}
                <div className='flex gap-5 flex-wrap justify-center lg:justify-start '>
                    {
                         
                            products.length===0?<Loading text={'Products'}/>: products.map((element,index)=>(
                                 <ProductCard element={element} key={index} />
                             ))
                         
                    }
                </div>

            </div>
        </div>
    </div>
  )
}

export default Products