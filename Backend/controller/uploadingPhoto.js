const uploadToCloudinary=require('../config/uploadToCloudinary');

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