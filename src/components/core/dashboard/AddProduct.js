import React,{useState} from 'react'
import UploadPhoto from './UploadPhoto'
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast'
import axios from 'axios'


const AddProduct = () => {
  const[url,setUrl]=useState(null);
  const{token}=useSelector(state=>state.user);
  
  const[loading,setLoading]=useState(false);
  const[formData,setFormData]=useState({
    name:"",
    description:"",
    price:""
  })

 
  const handleChange=(event)=>{
    setFormData((prevData)=>({
        ...prevData,
        [event.target.name]:event.target.value
    }))
   }


   const handleSubmit=async(e)=>{
    e.preventDefault();
    
    if(!url)
    {
      toast.error('First Upload Image');
      return;
    }
    setLoading(true);
    const toastId=toast.loading('loading');
    try{
    
      const user=await axios.post('https://fitness-app-0cqd.onrender.com/api/createProduct',{
        name:formData.name,
        description:formData.description,
        img:url,
        price:formData.price,
        token:token
      });

      
      toast.success(user.data.message);
      console.log('user',user);

    }catch(error){
      console.log('error',error);
      toast.error('Error in Creating Blog')
    }
    setLoading(false);
    toast.dismiss(toastId);

  }

  return (
    <div>

        <div className='flex flex-col '>
            <div className=' w-[80%] mx-auto border-[#ab9999] border-b-2 '>
                <h1 className='font-Inter text-[#f7ffff] text-5xl font-extralight my-3'>Create Product</h1>
                <div className='h-3 bg-[#ab9999] w-[35%]'></div>
                
            </div>
            <form onSubmit={handleSubmit} className='w-[85%] flex flex-col mx-auto gap-10 mt-6'>
              <UploadPhoto setUrl={setUrl}/>
              <div className='bg-neutral-600 rounded-md flex flex-col gap-3 p-5 h-auto py-8 w-[80%] mx-auto'>
                <label htmlFor="name" className='lg:w-[85%] lg:mx-auto'>Name <input required type="text" name="name" id="name"  className='block mt-1 w-full  mx-auto px-2 py-1 rounded-sm focus:outline-1 focus:outline-orange-600 focus:border-none text-orange-600' placeholder='Enter Product Name' value={formData.name} onChange={handleChange}/></label>
                <label htmlFor="description" className='lg:w-[85%] lg:mx-auto'>Description <textarea required name="description" id="description" className='mt-1 h-[150px] px-2 py-1  w-full rounded-sm focus:outline-orange-600 focus:border-none text-orange-600' placeholder='Enter Description of Product' value={formData.description} onChange={handleChange}></textarea></label>
                <label htmlFor="price" className='lg:w-[85%] lg:mx-auto'>Price <input required type="number" name="price" id="price" className='mt-1 w-full px-2 py-1 rounded-sm focus:outline-1 focus:outline-orange-600 focus:border-none text-orange-600' placeholder='Enter Price' value={formData.price} onChange={handleChange} /> </label>
                <button type="submit" className='border mt-2 border-gray-100 roudned-sm hover:bg-white hover:text-black font-semibold w-fit mx-auto px-2 py-1'>Create Product</button>
              </div>

            </form>
        </div>
    </div>
  )
}

export default AddProduct