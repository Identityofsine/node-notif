const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try{
        console.log(process.env.dbURI)
        await mongoose.connect(process.env.dbURI, {
            useUnifiedTopology: true,
            useNewUrlParser:true
        });
        console.log("connected to mongoose...")
    } catch(err){
        
    }
}

module.exports = connectDB