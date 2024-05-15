const uploadToCloudinary=require('../config/uploadToCloudinary');
const User=require('../models/User')
const AdditionalDetails=require('../models/AdditionalDetails')
const bcrypt=require('bcrypt')

exports.uploadPhoto=async(req,res)=>{
    try{
        const file = req.files.file;
        
      
        //create a successful response
        const ans=await uploadToCloudinary(file);
        console.log('ans',ans.url);
        if(!ans)
        {
            return res.status(400).json({
                success:false,
                message:'Cloudinary upload failed'
            })
        }
        

        return res.status(200).json({
            success:true,
            message:'photo successfully uploaded',
            url:ans.secure_url
        })
    }catch(error)
    {
        console.log('error',error);
        return res.status(500).json({
            success:false,
            message:'Failed in Uploading photo'
        })
    }
}

exports.updatePhoto=async(req,res)=>{
    try{

        const id=req.user.id;
        const{img_url}=req.body;
        if(!img_url)
        {
            res.status(400).json({
                success:false,
                message:'Img is not uploaded.'
            })
        }
        
        const user=await User.findOne({_id:id});
        const newsdd=await AdditionalDetails.findByIdAndUpdate({_id:user.additionalDetails},{
            img:img_url
        },{new:true});
        const newUser=await (await User.findOne({_id:id})).populate('additionalDetails');
        
        res.status(200).json({
            success:true,
            message:'Profile photo updated  successfully',
            data:newUser
        })
        
        
    }catch(error)
    {
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}

exports.passwordChange=async(req,res)=>{
    try{

        const id=req.user.id;
        const{currentPassword,newPassword}=req.body;
        console.log('req.body',req.body);
        console.log('currentPassword',currentPassword,newPassword);
        if(!currentPassword || !newPassword)
        {
           return res.status(400).json({
                success:false,
                message:'Fill all the Details'
            })
        }

        const user=await User.findOne({_id:id});
    
        if(await bcrypt.compare(currentPassword,user.password))
        {
            const newPass=await bcrypt.hash(newPassword,10);
            const newUser=await User.findByIdAndUpdate({_id:id},{password:newPass},{new:true});
            return res.status(200).json({
                success:true,
                message:'Password Updated Successfully'
            })
        }else{
            return res.status(400).json({
                success:false,
                messsage:'Fill Correct Current Password'
            })
        }


        res.status(200).json({
            success:true,
            message:'Profile photo updated  successfully',
            data:newUser
        })
        
        
    }catch(error)
    {
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}