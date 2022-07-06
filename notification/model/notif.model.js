const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//name, content, source, icon, timespent, expiresIn
const notification = new Schema({
    name: {
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    source:{
        type:String,
        required:true,
    },
    timesince:{
        type:Number,
        required:true,
    },
    expiresIn : {
        type:Number,
        required:true,
    }

});

module.exports = mongoose.model('Notification', notification);