import React,{useState} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useSelector} from 'react-redux'
import UploadPhoto from './UploadPhoto'

const AddBlog = () => {
  const[url,setUrl]=useState(null);
  const{token}=useSelector(state=>state.user);
  const[loading,setLoading]=useState(false);
  const[formData,setFormData]=useState({
    title:"",
    description:""
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
      
      const user=await axios.post(process.env.REACT_APP_BACKEND_URL+'/api/createBlog',{
        name:formData.title,
        img:url,
        description:formData.description,
        token:token
      });
      toast.success(user.data.message);

    }catch(error){
      toast.error('Error in Creating Blog')
    }
    setLoading(false);
    toast.dismiss(toastId);

  }


  return (
    <div>

        <div className='flex flex-col gap-11  '>

            <div className=' w-[80%] mx-auto border-[#ab9999] border-b-2  '>
                <h1 className='font-Inter text-[#f7ffff] text-5xl font-extralight my-3'>Create Blog</h1>
                <div className='h-3 bg-[#ab9999] w-[35%]'></div>
            </div>

            <form className='h-auto sm:w-[85%] gap-9 flex flex-col py-10  sm:mx-auto rounded-md  ' onSubmit={handleSubmit}>
                <UploadPhoto required setUrl={setUrl}/>
                <div className='flex py-8 w-[80%] h-auto mx-auto flex-col gap-9 bg-neutral-600'>
                   <input type="search" name="title" id="title" required className=' w-[80%] mx-auto py-1 rounded-sm border-none focus:outline-none px-3 text-xl text-orange-600'
                    placeholder='Title' value={formData.title} onChange={handleChange} />
                   <textarea type="text" name="description" id="description" className='relative h-[200px] w-[80%] mx-auto rounded-sm border-none focus:outline-none px-3 text-xl top-0
                     text-orange-600 placeholder:absolute py-1 placeholder:top-0 placeholder:py-1' value={formData.description} 
                     placeholder='Enter Description here' onChange={handleChange}/>
                   <button disabled={loading?true:false} className={`bg-transparent border border-gray-100 py-1 font-semibold transition-all rounded-sm duration-300 hover:bg-white hover:text-black w-[75px] mx-auto`}>{loading?'Loading':'Publish'}</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default AddBlog