const express=require('express');
const router=express.Router();

const{uploadPhoto,updatePhoto,passwordChange}=require('../controller/extra')
const{auth}=require('../Middleware/auth');
router.post('/uploadPhoto',auth,uploadPhoto);
router.post('/updatephoto',auth,updatePhoto);
router.post('/updatePassword',auth,passwordChange);
module.exports=router;