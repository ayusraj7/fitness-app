import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';


const Cart = () => {
  const {cartItems,total,totalItems}=useSelector((state)=>state.cart);
  
  const navigate=useNavigate();
  return (
    <div className='w-full px-10 flex flex-col'>
        <div className='w-[85%] mx-auto relative border-[#ab9999] border-b-2 '>
                <h1 className='font-Inter text-[#f7ffff] text-5xl font-extralight my-3'>Cart</h1>
                <div className='h-3 bg-[#ab9999] w-[35%]'></div>   
        </div>
        <div className='h-auto pb-8 relative flex sm:w-[80%] sm:px-10 px-3  mt-[80px] mx-auto flex-col '>
            
               
                <div className='flex gap-5 flex-wrap justify-center lg:justify-start '>
                    {
                         
                            // products && products?.map((element,index)=>(
                            //      <ProductCard element={element} key={index} />
                            //  )) 
                    }  
                </div>

                {
                    total===0 && <div className='text-white flex flex-col gap-10 items-center justify-center'>
                        <h1 className='text-4xl font-extralight text-center'>No Items are Added in Cart</h1>
                        <Button text={'Add Products'} css={`mt-[200px] border rounded-sm hover:bg-white hover:text-black`} onclick={()=>navigate('/shop')}/>
                    </div>
                }

            
        </div>
        
    </div>
  )
}

export default Cart