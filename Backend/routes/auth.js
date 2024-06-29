const express=require('express');
const router=express.Router();

const{signup,login, generateToken, resetPassword}=require('../controller/Auth');
const{sendotp}=require('../controller/otp');
router.post('/signup',signup);
router.post('/send-otp',sendotp);
router.post('/login',login);
router.post('/forgetPassword',generateToken);
router.post('/resetPassword/:id',resetPassword)

module.exports=router;