const mongoose=require('mongoose')
const User=require('../models/User')

const blogSchema=new mongoose.Schema({
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
    creator:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
},
{timestamps:true})

module.exports=mongoose.model("Blog",blogSchema);