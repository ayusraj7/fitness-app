// Import the Mongoose library
const mongoose = require("mongoose")

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
  {
    // Define the name field with type String, required, and trimmed
    name: {
      type: String,
      required: true,
    },
    mobileno:{
        type:Number,
        required:true,
    },
    email: {
      type: String,
      required: true,
    },
    accountType: {
        type: String,
        enum: ["member","trainer"],
        required: true,
    },
    password: {
      type: String,
      required: true,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "AdditionalDetails",
    },
    resettoken: {
      type: String,
      default:''
    },
    resetPasswordExpires: {
      type: Date,
      default:''
    },
    classes:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Class'
    }],
    product:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
  },
  { timestamps: true }
)
module.exports = mongoose.model("User", userSchema)