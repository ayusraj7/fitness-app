const express=require('express');
const router=express.Router();

const{uploadPhoto}=require('../controller/uploadingPhoto')
const{auth}=require('../Middleware/auth');
router.post('/uploadPhoto',auth,uploadPhoto);
module.exports=router;