const NotFound = require('../errors/notfound');
const {Question}=require('../models');

class QuestionRepository{

async createQuestion(questionData){
    try {
        const question=await Question.create({
            title:questionData.title,
            body:questionData.body,
            userId:questionData.userId,
            topicTags:questionData.topicTags
        });
        return question;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
// async getQuestion(id){
//     try{
//         const question=await Question.findById(id);
//         if(!question){
//             throw new NotFound("Question",id);
//         }
//         return question;
//     }
//     catch(error){
//         console.log(error);
//         throw error;
//     }
// }
async searchQuestion(text,tag){
    try {
        const query={};
        if(text){
            query.body=new RegExp(text,'i');
        }
        if(tag){
            query.topicTags=tag;
        }
        const questions=await Question.find(query);
        if(!questions||questions.length === 0){
            throw new NotFound("Question",query);
        }
        return questions;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
}

module.exports=QuestionRepository;