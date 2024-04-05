const Product=require('../models/Product');
const User=require('../models/User')
exports.createProduct = async(req,res)=>{
    try{
        const{name,description,img,price}=req.body;
        
        if(!name || !img ||  !description || !price)
        {
            return res.status(400).json({
                success:false,
                message:'Fill all the Details',
            })
        }

        const userId=req.user.id;
        
        const product=await Product.create({
            name,
            img,
            description,
            price,
            seller:userId
        })

        return res.status(202).json({
            success:true,
            message:'Product successfully added ',
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

exports.getProducts=async(req,res)=>{
    try{
        const product=await Product.find({})
        

        return res.status(202).json({
            success:true,
            message:'Products fetched ',
            data:product,
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

exports.getProduct=async(req,res)=>{
    try{
        //create blog 
        const id=req.params.id;
        const user=await Product.find({_id:id}).populate('seller')
        
        res.status(200).json({
          success:true,
          message:'Product successfully fetched',  
          data:user
        })


    }catch(error)
    {
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'Blog not fetched successfully. Please try again',
        })
    }
}