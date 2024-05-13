import React,{useState} from 'react'
import { IoMdAdd } from "react-icons/io";
import Button from '../../common/Button'
import { CiImageOn } from "react-icons/ci";
import axios from 'axios';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast'


const UploadPhoto = ({setUrl}) => {
    const[file,setFile]=useState(null);
    const[loading,setLoading]=useState(false);
    const {token}=useSelector(state=>state.user);

    const uploadPhoto=async()=>{
        if(!file)
        {
            toast.error('Please Select Image First');
            return;
        }
        const toastId=toast.loading('loading');
        setLoading(true);
        try{
            let formData=new FormData();
            formData.append('file',file);
            formData.append('token',token);
            console.log('formData',formData);
           
            const user=await axios.post(process.env.REACT_APP_BACKEND_URL+'/api/uploadPhoto',formData,{headers: {
                "Content-Type": "multipart/form-data",
              }});
            console.log('user',user.data.url);
            setUrl(user.data.url);
            
            
            toast.success('Image Uploaded Successfully');

        }catch(error){
            console.log('error',error);
            toast.error(`Photo Not Uploaded.Try Again`)
        }
        setLoading(false);
        toast.dismiss(toastId);
    }
  return (
    <div className='w-[80%] px-10 py-3 pb-10 mx-auto bg-neutral-600 h-auto rouned-sm'>
        <h1 className='text-2xl text-gray-300 text-center'><CiImageOn className='inline mx-1'/>Image</h1>
        {   
           file && <img src={URL.createObjectURL(file)} className='h-[250px] w-full mt-4 rounded-md'/>
        }
        <div className='flex justify-between mt-5 px-3'>
            <div>
                <label htmlFor="img" ><IoMdAdd className='h-[30px] w-[30px] cursor-pointer rounded-full border border-white' size={30}/></label>
                <input type="file" name="" id="img" className=' hidden' onChange={(e)=>setFile(e.target.files[0])}  />
            </div>
            <Button  text={loading?'loading':'Upload'} css={'cursor-pointer hover:bg-orange-600 hover:text-white transition-all duration-200 text-orange-600 font-semibold bg-yellow-300 px-5 rouned-sm'} onclick={!loading?uploadPhoto:()=>(console.log('no money no pain'))}></Button>
        </div>
    </div>
  )
}

export default UploadPhoto