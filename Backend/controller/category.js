const Category=require('../models/Category');

exports.createCategory=async(req,res)=>{
    try{
        const{name,description}=req.body;
        if(!name || !description)
        {
            res.status(400).json({
                success:false,
                message:'Fill all the Details'
            })
        }
        const user=await Category.create({name,description});
        console.log('user',user);
        return res.status(200).json({
            success:true,
            message:'Category created Successfully',
            data:user
        })

    }catch(error){
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'internal Servor error',
        })
    }
}

exports.getCategory=async(req,res)=>{
    try{
        const categories=await Category.find({});
        console.log('categories',categories);
        res.status(200).json({
            success:true,
            message:'Categories fetched successfully',
            data:categories
        })
    }catch(error){
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'internal Servor error',
        })
    }
}