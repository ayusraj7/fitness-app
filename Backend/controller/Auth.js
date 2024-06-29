const bcrypt=require('bcrypt')
const User=require('../models/User')
const OTP=require('../models/OTP')
const AdditionalDetails=require('../models/AdditionalDetails')
require('dotenv').config();
const jwt=require('jsonwebtoken')
const mailSender=require('../config/mailSender');

const {v4:uuidv4} = require('uuid');
const { isObjectIdOrHexString } = require('mongoose');


exports.signup = async (req, res) => {
    try {
      
      const {
        name,mobileno,email,password,accountType,otp} = req.body

        // Check if All Details are there or not
        if (!name || !mobileno || !email || !password || !accountType ) {
                return res.status(403).send({
                success: false,
                message: "All Fields are required",
                })
        }
     
  
      // Check if user already exists
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists. Please sign in to continue.",
        })
      }
  
      //Find the most recent OTP for the email
      const response = await OTP.find({email:email}).sort({createdAt:-1}).limit(1);
      if (response.length === 0) {
        // OTP not found for the email
        return res.status(400).json({
          success: false,
          message: "The OTP is not valid",
        })
      } else if (otp !== response[0].otp) {
        // Invalid OTP
        return res.status(400).json({
          success: false,
          message: "The OTP is not valid",
        })
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10)
  
      // Create the user
  
      // Create the Additional Profile For User
      const details = await AdditionalDetails.create({
        img:`https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
        age:null,
        about:null,
        gender:null,
      })
      const user = await User.create({
        name,
        mobileno,
        email,
        password: hashedPassword,
        accountType,
        additionalDetails:details._id,
      })
      user.password=undefined;
  
      return res.status(200).json({
        success: true,
        data:user,
        message: "User registered successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "User cannot be registered. Please try again.",
      })
    }
  }

  exports.login = async (req, res) => {
    try {
      // Get email and password from request body
      const { email, password } = req.body
  
      // Check if email or password is missing
      if (!email || !password) {
        // Return 400 Bad Request status code with error message
        return res.status(400).json({
          success: false,
          message: `Please Fill up All the Required Fields`,
        })
      }
  
      // Find user with provided email
      const user = await User.findOne({ email }).populate("additionalDetails");
      console.log('user',user);
      
      // If user not found with provided email
      if (!user) {
        // Return 401 Unauthorized status code with error message
        return res.status(401).json({
          success: false,
          message: `User is not Registered with Us Please SignUp to Continue`,
        })
      }
  
      // Generate JWT token and Compare Password
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          { email: user.email, id: user._id, accountType:user.accountType },
          process.env.JWT_SECRET,
          {
            expiresIn: "72h",
          }
        )
  
        // Save token to user document in database
        user.token = token
        user.password = undefined
        // Set cookie for token and return success response
        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure:true,
        }
        res.cookie("token", token, options).status(200).json({
          success: true,
          message: `User Login Success`,
          user:user,
          token:token,
        })
      } else {
        return res.status(401).json({
          success: false,
          message: `Password is incorrect`,
        })
      }
    } catch (error) {
      console.error(error)
      // Return 500 Internal Server Error status code with error message
      return res.status(500).json({
        success: false,
        message: `Login Failure Please Try Again`,
      })
    }
  }


  exports.deleteAccount=async(req,res)=>{
    try{

      const id=req.user.id;
      

    }catch(error){
      console.log('error--->',error);
      res.status(500).json({
        success:false,
        message:'Internal Server Error'
      })
    }
  }

  exports.generateToken=async(req,res)=>{
    try{
      const {email}=req.body;
      const token=uuidv4();
      const user=await User.findOne({email:email});  
      if(!user)
      {
        return res.status(404).json({
          success:false,
          message:'User Not Found'
        })
      }
      const newExpirationTime = new Date(Date.now() + 2 * 60 * 1000);
      const userDetails=await User.findByIdAndUpdate({_id:user._id},{resettoken:token,resetPasswordExpires:newExpirationTime},{new:true});
      
    
      await mailSender(email,`Password Reset Link`,`<link>localhost:3000/resetPassword/${token}</link>`);
      return res.status(200).json({
        success:true,
        message:'resent link sent successfully',
      })
      
    }catch(error){
      console.log('error--->',error);
      res.status(500).json({
        success:false,
        message:error.message,
        error:error
      })
    }
  }

  exports.resetPassword=async(req,res)=>{
    try{
      const {id}=req.params;
      const {newPassword}=req.body;
      const user=await User.findOne({resettoken:id});
      if(!user)
      {
        return res.status(404).json({
          success:false,
          message:"User Not Found'"
        })
      }
      const diff=(user.resetPasswordExpires-new Date())/(1000 * 60);
      if(user.resettoken !== id && diff>0)
      {
        return res.status(401).json({
          success:false,
          message:'Invalid Token or Expired'
        })
      }
    
      // Reset password
      user.password = await bcrypt.hash(newPassword, 10)
      user.resettoken = null;
      user.resetTokenExpiration = null;

      await user.save();
    
      res.status(200).send({
        success:true,
        message:'Password reset successfully',
      });
      
    }catch(error){
      console.log('error--->',error);
      res.status(500).json({
        success:false,
        message:error.message,
        error:'Internal server error'
      })
    }
  }