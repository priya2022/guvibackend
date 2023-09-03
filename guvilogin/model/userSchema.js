const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    gender:String,
    dob:String,
    mobile:Number
})

mongoose.model('guviusers',userSchema);
module.exports = mongoose.model('guviusers')