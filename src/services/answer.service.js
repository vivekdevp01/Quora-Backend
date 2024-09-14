const NotFound = require("../errors/notfound");

// const {QuestionRepository}=require('../repositories');
class AnswerService{
    constructor(answerRepository, questionRepository){
        this.answerRepository=answerRepository;
        this.questionRepository=questionRepository;
    }

    async createAnswer(answerData){
      // const question=await this.questionRepository.getQuestion(questionId);
      // if(!question){
      //   throw new NotFound('Question',questionId);
      // }
      try{
        const answer=await this.answerRepository.createAnswer(answerData);
        return answer;
      }
      catch(error){
        console.error(error);
        throw error;
      }
    }
    async updateAnswer(id,text){
        try{
            const answer=await this.answerRepository.updateAnswer(id,text);
            return answer;
        }
        catch(error){
            throw error;
        }
    }
}
module.exports=AnswerService;