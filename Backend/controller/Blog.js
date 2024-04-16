const Blog=require('../models/Blog');
const User=require('../models/User');

exports.createBlog =async(req,res)=>{
    try{

        const{name,img,description}=req.body;

        if(!name || !img || !description)
        {
            res.status(400).json({
                success:false,
                message:'Fill all the details',
            })
        }

        //create blog 
        const userId=req.user.id;
       
        const userBlog=await Blog.create({
            name,
            img,
            description,
            creator:userId
        })

        
        res.status(200).json({
          success:true,
          message:'Blog successfully created ',  
        })


    }catch(error)
    {
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'Blog not created. Please try again',
        })
    }
}

exports.getBlogs=async(req,res)=>{
    try{
        //create blog 
        const blogs=await Blog.find({});
        
        res.status(200).json({
          success:true,
          message:'Blogs successfully fetched',  
          data:blogs
        })


    }catch(error)
    {
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'Blog not fetched successfully. Please try again',
        })
    }
}

exports.getBlog=async(req,res)=>{
    try{
        //create blog 
        const id=req.params.id;
        const user=await Blog.find({_id:id}).populate('creator')
        
        res.status(200).json({
          success:true,
          message:'Blog successfully fetched',  
          data:user
        })


    }catch(error)
    {
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'Blog not fetched successfully. Please try again',
        })
    }
}


exports.userBlogs=async(req,res)=>{
    try{
        //create blog 
        const user_id=req.params.id;
        
        const user=await Blog.find({creator: user_id}).exec();
        console.log('user',user);
        if(user)
        {
            console.log('user',user);
        }
        res.status(200).json({
          success:true,
          message:'Blog successfully fetched',  
          data:user
        })


    }catch(error)
    {
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'Blog not fetched successfully. Please try again',
        })
    }
}



exports.updateBlog=async(req,res)=>{
    try{
        const blogId=req.params.id;
        

    }catch(error)
    {
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'Blog not updated.Please try again'
        })
    }
}