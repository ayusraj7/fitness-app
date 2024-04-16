const express=require('express');
const router=express.Router();

const {createClass,getClasses,getMemberClasses,getInstructorClasses}=require('../controller/classes');
const{auth,isMember,isTrainer}=require('../Middleware/auth')

router.post('/createClass',auth,isTrainer,createClass);
router.get('/getClasses',getClasses);
router.post('/getClasses/:id',auth,isTrainer,getInstructorClasses);
router.post('/memberclasses/:id',auth,isMember,getMemberClasses);
module.exports=router;