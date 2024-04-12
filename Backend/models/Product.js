const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    studentPurchased:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }]
},
{timestamps:true})

module.exports=mongoose.model("Product",productSchema);