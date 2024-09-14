const {Answer,Question}=require('../models');

class AnswerRepository{
    async createAnswer(answerData) {
        try{

            const answer = new Answer(answerData);
             await answer.save();

            const question = await Question.findById(answer.questionId).exec();

            if (!question) {
                throw new Error('Associated question not found');
            }

            // Return both the answer and the associated question
            return {
                answer,
                question,
            };
        }
        catch(error){
            console.error(error);
            throw error;
        }
    }
    async updateAnswer(id,text){
        try {
            const updatedAnswer=await Answer.findByIdAndUpdate(id,text,{new:true});
            if(!updatedAnswer){
                throw new NotFound("Answer",id);
            }
            return updatedAnswer;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = AnswerRepository;