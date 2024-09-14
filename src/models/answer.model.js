const mongoose = require('mongoose');

const answerSchema=new mongoose.Schema({
    text:{
        type:String,
        required:[true,"answer text cannot be empty"]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,"answer must belong to a user"]
    },
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question',
        required:[true,"answer must belong to a question"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Answer=mongoose.model('Answer',answerSchema);
module.exports = Answer;