const {AnswerRepository}=require('../repositories');
const {AnswerService}=require('../services');
const {StatusCodes}=require('http-status-codes');

const answerService=new AnswerService(new AnswerRepository());

async function createAnswer(req,res,next){
    try{
      const {questionId}=req.params;
      const {userId,text}=req.body;
        const result=await answerService.createAnswer({questionId,userId,text});
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Answer created successfully",
            data:{
                answer:result.answer,
                question:result.question}
        })
    }
    catch(error){
        console.log(error);
        next(error);
    }
 
}
async function updateAnswer(req,res,next){
    try{
        const answer=await answerService.updateAnswer(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Answer updated successfully",
            data:answer
        })
    }
    catch(error){
        next(error);
    }
}

module.exports={
    createAnswer,
    updateAnswer,
 };
