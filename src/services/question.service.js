

class QuestionService{
    constructor(questionRepository){
        this.questionRepository=questionRepository;
    }
   async createQuestion(questionData){
    try{
        const question=await this.questionRepository.createQuestion(questionData);
        return question;
    }
    catch(error){
        console.error(error);
        throw error;
    }
   } 
   async getQuestion(id){
    try{
        const question=await this.questionRepository.getQuestion(id);
        return question;
    }
    catch(error){
        console.error(error);
        throw error;
    }
   }
   async searchQuestion(text,tag){
    try{
        const questions=await this.questionRepository.searchQuestion(text,tag);
        return questions;
    }
    catch(error){
        console.error(error);
        throw error;
    }
   }
}
module.exports=QuestionService;