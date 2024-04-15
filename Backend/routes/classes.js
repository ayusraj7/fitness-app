const express=require('express');
const router=express.Router();

const {createClass,getClasses}=require('../controller/classes');
const{auth,isTrainer}=require('../Middleware/auth')

router.post('/createClass',auth,isTrainer,createClass);
router.get('/getClasses',getClasses);
module.exports=router;