const mongoose = require("mongoose");

// Define the Tags schema
const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		enum:['Girls','Boys','Strength','Body Building','Yoga','Endurance','Weight loss','Kick Boxing']
	},
	description: { type: String },
	courses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Classes",
		},
	],
});

// Export the Tags model
module.exports = mongoose.model("Category", categorySchema);
