const mongoose = require("mongoose")

// Define the Courses schema
const classesSchema = new mongoose.Schema({
  name: { type: String ,required:true},

  preference: { type: String ,required:true},
  description:{type:String,required:true},
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  timing:{
      type:String,
      required:true,
  },
  duration:{
      type:Number,
      required:true,
  },
  price:{
      type:Number,
      required:true,
  },
  img: {
    type: String,
  },
  category:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  }],
  studentEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],
},
{timestamps:true})

// Export the Courses model
module.exports = mongoose.model("Class", classesSchema)