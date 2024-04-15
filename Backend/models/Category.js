const mongoose = require("mongoose");

// Define the Tags schema
const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		enum:['Strength','Body Building','Yoga','Endurance','Weight loss','Kick Boxing','Diet',,'Fitness','Athletics']
	},
	description: { type: String },
	classes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Class",
		},
	],
});

// Export the Tags model
module.exports = mongoose.model("Category", categorySchema);
