const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
 username:{
    type:String,
    require:[true,"username cannot be empty"]
 },
 email:{
    type:String,
    required:[true,"email cannot be empty"],
    unique:true
 },
 bio:{
    type:String,
    default:""
 }

});

const User=mongoose.model('User',userSchema);
module.exports=User;