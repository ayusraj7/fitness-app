// Importing necessary modules and packages
const express = require("express");
const app = express();

// Setting up port number
const PORT = process.env.PORT || 4000;

const database = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");
//whenever you are using fileupload use express-fileupload or multer 
const fileUpload = require("express-fileupload");
app.use(express.json());
// Loading environment variables from .env file
dotenv.config();
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

// Connecting to database
database.connect();
app.use(cors());

// Setting up routes
const authRoutes=require('./routes/auth');
app.use('/api',authRoutes);
const middRoutes=require('./routes/product');
app.use('/api',middRoutes);
const blogRoutes=require('./routes/Blog');
app.use('/api',blogRoutes);
// const uploadPhotoRoute=require('./routes/extra');
// app.use('/api',uploadPhotoRoute);
// const categoryRoute=require('./routes/category');
// app.use('/api',categoryRoute);
// const classesRoutes=require('./routes/classes');
// app.use('/api',classesRoutes);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// const cron=require('node-cron');
// cron.schedule("* */10 * * * *",()=>{
// 	console.log(new Date());
// })

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// End of code.


