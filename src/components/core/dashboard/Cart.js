import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import CartCard from './CartCard';


const Cart = () => {
  const {cartItems,total,totalItems}=useSelector((state)=>state.cart);

  
  const navigate=useNavigate();
  return (
    <div className='w-full  flex flex-col'>
        <div className='w-[85%] mx-auto relative border-[#ab9999] border-b-2 '>
                <h1 className='font-Inter text-[#f7ffff] text-5xl font-extralight my-3'>Cart</h1>
                <div className='h-3 bg-[#ab9999] w-[35%]'></div>   
        </div>
        <div className='h-auto pb-8 relative flex w-[85%] x-3  mt-[80px] mx-auto '>          
                    {
                      totalItems>0 && <div className='flex  gap-5 flex-wrap '>
                        
                          <div className='w-[80%]'>
                              
                              { 
                                  cartItems.map((value,index)=>(
                                    <CartCard data={value} key={index}/>
                                  ))
                              }

                          </div>
                          <div className='md:w-[30%] max-w-[280px] flex flex-col gap-2 border border-gray-600 bg-neutral-500 px-4 py-4 rounded-sm'>
                            <p className='text-lime-500 text-xl '>Total:</p>
                            <h1 className='text-3xl text-orange-400 '>₹{total}</h1>
                            <Button text={'Buy Now'} css={'bg-yellow-300 text-black w-full py-1 pt-1 mt-2 hover:text-yellow-300 hover:border-yellow-300 hover:bg-transparent  hover:border text-center  font-xl rounded-sm px-3 '}/>
                          </div>
                        
                      </div>
                    }  
                    
               

                {
                    totalItems===0 && <div className='text-white flex flex-col gap-10 items-center justify-center'>
                        <h1 className='text-4xl font-extralight text-center'>No Items are Added in Cart</h1>
                        <Button text={'Add Products'} css={`mt-[200px] border rounded-sm hover:bg-white hover:text-black`} onclick={()=>navigate('/shop')}/>
                    </div>
                }

            
        </div>
        
    </div>
  )
}

export default Cart