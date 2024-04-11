const mongoose = require("mongoose");

// Define the Profile schema
const detailsSchema = new mongoose.Schema({
	img: {
		type: String,
	},
	age: {
		type: Number,
	},
	about: {
        type:String,	
	},
	gender: {
		type: String,
	},
});

// Export the Profile model
module.exports = mongoose.model("AdditionalDetails", detailsSchema);
