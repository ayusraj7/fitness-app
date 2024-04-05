const Class=require('../models/Classes')

exports.createClasses = async(req,res)=>{
    try{
        const{name,preference,timing,duration,price,img,categoryId,description}=req.body;
        
        if(!name ||!preference || !timing || !duration ||!category || !img ||  !description || !price)
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
            timing,
            duration,
            price,
            img,
            description,
            $push: { category:categoryId},
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

exports.getProduct=async(req,res)=>{
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