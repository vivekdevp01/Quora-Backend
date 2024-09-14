const mongoose= require('mongoose');

const topicSchema=new mongoose.Schema({
   name:{
    type:String,
    required:[true,"topic name cannot be empty"],
    unique:true,
    trim:true,
   }
})

const Topic=mongoose.model('Topic',topicSchema);

module.exports=Topic;