const express=require('express');
const router=express.Router();

const{auth,isTrainer,isMember}=require('../Middleware/auth');
const{createBlog,getBlog,getBlogs}=require('../controller/Blog')
router.post('/createBlog',auth,isTrainer,createBlog);
router.get('/blogs',getBlogs);
router.get('/blogs/:id',getBlog)

module.exports=router;