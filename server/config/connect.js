const mongoose = require("mongoose");

const connectDB = async() =>{
    try{
    mongoose.set('strictQuery',false)
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("MONGODB CONNECTED")
    }
    catch(err){
        console.log(err);
    }
}

module.exports= connectDB;