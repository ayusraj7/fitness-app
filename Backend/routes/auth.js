const express=require('express');
const router=express.Router();

const{signup,login}=require('../controller/Auth');
const{sendotp}=require('../controller/otp');
router.post('/signup',signup);
router.post('/send-otp',sendotp);
router.post('/login',login);

module.exports=router;