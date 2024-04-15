const express=require('express');
const router=express.Router();

const{createCategory,getCategory}=require('../controller/category');
const{auth,isTrainer}=require('../Middleware/auth')
router.post('/createCategory',auth,isTrainer,createCategory);
router.get('/getCategory',getCategory)
module.exports=router;