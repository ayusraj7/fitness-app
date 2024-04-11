const express=require('express');
const router=express.Router();

const{auth,isTrainer,isMember}=require('../Middleware/auth');
const{createBlog,getBlog,userBlogs,getBlogs}=require('../controller/Blog')
router.post('/createBlog',auth,isTrainer,createBlog);
router.get('/blogs',getBlogs);
router.get('/blog/:id',getBlog)
router.get('/blogs/:id?',userBlogs)

module.exports=router;