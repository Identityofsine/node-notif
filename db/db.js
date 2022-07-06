const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.dbURI, {
            useUnifiedTopology: true,
            useNewUrlParser:true
        });
        console.log("connected to mongoose...")
    } catch(err){
        console.error(err);
    }
}

module.exports = connectDB