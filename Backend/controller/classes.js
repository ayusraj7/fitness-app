const Class=require('../models/Classes')
const Category=require('../models/Category')
const User=require('../models/User')

exports.createClass = async(req,res)=>{
    try{
        const{name,preference,timing,duration,price,img,categoryId,description}=req.body;
        console.log('reqsad',req.body);
        if(!name ||!preference ||!description || !timing || !duration ||!categoryId || !img  || !price)
        {
            return res.status(400).json({
                success:false,
                message:'Fill all the Details',
            })
        }

        const userId=req.user.id;


        const category=await Category.find({_id:categoryId});
        
        if(!category)
        {
            res.status(400).json({
                success:false,
                message:'Category is not Correct'
            })
        }
        
        const newClass=await Class.create({
            name,
            preference,
            description,
            timing,
            duration,
            price,
            img,
            category:categoryId,
            instructor:userId
        })

        if(!newClass)
        {
            res.status(400).json({
                success:true,
                message:"Class not Created"
            })
        }

        const categories=await Category.findByIdAndUpdate({_id:categoryId},{
            $push:{classes:newClass._id}
        }) ;
        

        return res.status(202).json({
            success:true,
            message:'Class Successfully created ',
        })

    }catch(error)
    {
        console.log('error-->',error);
        res.status(500).json({
            success:false,
            message:'internal server error',
        })

    }
}

exports.getClasses=async(req,res)=>{
    try{
        const classes=await Class.find({}).populate('instructor');
        
        

        return res.status(202).json({
            success:true,
            message:'Classes fetched Successfully',
            data:classes,
        })

    }catch(error)
    {
        console.log('error-->',error);
        res.status(500).json({
            success:false,
            message:'internal server error',
        })

    }
}

//get class of a particular trainer. 
exports.getInstructorClasses=async(req,res)=>{
    try{
        
        const {id}=req.params;

        const classes=await Class.find({instructor:id}).exec();
        
        res.status(200).json({
            success:true,
            message:'User Classes Fetched Successfully',
            data:classes
        })

    }catch(error)
    {
        console.log('error--->',error);
        res.status(500).json({success:false,message:'Internal Server Error'})
    }
}

exports.getMemberClasses=async(req,res)=>{
    try{
        
        const {id}=req.params;

        const classes=await User.find({_id:id}).populate('classes').exec();
        
        res.status(200).json({
            success:true,
            message:'Member Classes Fetched Successfully',
            data:classes
        })

    }catch(error)
    {
        console.log('error--->',error);
        res.status(500).json({success:false,message:'Internal Server Error'})
    }
}