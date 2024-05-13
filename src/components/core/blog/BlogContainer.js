import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loading from '../../../pages/Loading'
import toast from 'react-hot-toast'
import{useLocation,useSearchParams,useParams} from 'react-router-dom'
import BlogCard from './BlogCard'
const BlogContainer = () => {

    const id=useLocation().search.substr(2);
    
    const [blogData,setBlogData]=useState('');
    const[loading,setLoading]=useState(true);

    let url=process.env.REACT_APP_BACKEND_URL+'/api/blogs'
   
    if(id?.length>0)
    {
      url=process.env.REACT_APP_BACKEND_URL+`/api/blogs/${id}?`
    }
  const fetchBlogs=async()=>{
            
            try{     
                    setLoading(true);
                    const user=await axios.get(url);

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