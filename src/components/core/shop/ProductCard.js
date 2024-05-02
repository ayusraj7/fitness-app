import React,{useState} from 'react'
import Button from '../../common/Button';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Modal from '../../common/Modal'
import {  setCartItems } from '../../../reducer/slices/cartSlice';
import toast from 'react-hot-toast';

const ProductCard = ({element}) => {
  
  const {token,userData}=useSelector(state=>state.user);
  const[showModal,setModal]=useState(null);


  const dispatch=useDispatch();
  const navigate=useNavigate();
  const goto=()=>{
    console.log('hellow bhai bhai ');
    navigate(`/product/${element._id}`);
  }

  const goBuy=(e)=>{
    e.stopPropagation();
    if(!token)
    {
       setModal({
         text1:"You are not logged in!",
         text2:"Please login to Buy",
         btn1Text:"Login",
         btn2Text:"Cancel",
         btn1Handler:()=>navigate('/login'),
         btn2Handler:()=>setModal(null),
       });  
    }

  }
  const gotoCart=(e)=>{
    e.stopPropagation();

   
    if(!token)
    {
      if(userData?.accountType==='trainer')
      {
        toast.error(`You Have to make your own Member Account`);
        return;
      }
       setModal({
         text1:"You are not logged in!",
         text2:"Please login to add To Cart",
         btn1Text:"Login",
         btn2Text:"Cancel",
         btn1Handler:()=>navigate('/login'),
         btn2Handler:()=>setModal(null),
       });  
    }else{
      dispatch(setCartItems(element));
    }
    
  }
  
  
  

  

  return (
    <div id='topdiv' className='border w-[240px] h-[350px]  border-gray-700 rounded-sm flex flex-col items-start justify-between gap-1 pb-4' >
      <img onClick={goto}  src={element.img} alt={element.name} className='h-[150px] w-[240px] rounded-t-sm ' />
      <h1 className='px-2 text-xl font-bold text-gray-300'>{element.name}</h1>
      <p className='px-2 text-sm text-gray-500'>{element?.description?.substr(0,100)}...</p>
      <p className=' px-2 flex gap-8  text-lime-500'><span className='line-through text-white'>₹{element.price+300}</span>₹{element.price}</p>
      <div className='flex justify-between pl-2 gap-5 text-[16px]'>
        <Button  text={'Buy Now'} onclick={goBuy} css={'border border-gray-300 text-white hover:bg-white hover:text-black font-semibold rounded-sm'}/>
        <Button text={'Add To Cart'} onclick={gotoCart}  css={'border border-gray-300 text-white hover:bg-white hover:text-black font-semibold rounded-sm'}/>
      </div>
      
      {
        showModal && <Modal modalData={showModal} />
      }
    </div>
  )
}

export default ProductCard