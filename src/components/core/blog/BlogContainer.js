import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loading from '../../../pages/Loading'
import toast from 'react-hot-toast'
import BlogCard from './BlogCard'
const BlogContainer = () => {

    const [blogData,setBlogData]=useState('');
    const[loading,setLoading]=useState(true);
    

  const fetchBlogs=async()=>{
            
            try{     
                    setLoading(true);
                    const user=await axios.get('http://localhost:4000/api/blogs');
                    setBlogData(user.data.data);
                    setLoading(false);

            }catch(error)
            {
                console.log('error',error);
                toast.error(`Blogs can't fetched`)
            }
            
  }

  useEffect(()=>{
   fetchBlogs();
  },[])

  return (
    <div className=' h-full flex mt-[50px] flex-wrap justify-start gap-[50px] mb-10'>
        {
    
            blogData.length>0 && blogData.map((data,index)=>(
              <BlogCard data={data} key={index} />
          ))
        }
        {
          loading && <Loading text={'Blogs'}/>
        }
       
       
        
    </div>
  )
}

export default BlogContainer