const mongoose=require('mongoose');

const questionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"question title cannot be empty"]
    },
    body:{
        type:String,
        required:[true,"question body cannot be empty"]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,"question must belong to a user"]
    },
    topicTags: {
        type: [String], // Array of strings
        default: []     // Default to an empty array if no tags are provided
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})

const Question=mongoose.model('Question',questionSchema);

module.exports=Question;