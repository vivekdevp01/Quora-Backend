const {QuestionRepository} =require('../repositories');
const {QuestionService} = require('../services');
const {StatusCodes}=require('http-status-codes');

const questionService=new QuestionService(new QuestionRepository());

async function createQuestion(req,res,next){
    try{
        const question=await questionService.createQuestion(req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Question created successfully",
            data:question
        })
    }
    catch(error){
        next(error);
    }
}

async function getQuestion(req,res,next){
    try{
        const question=await questionService.getQuestion(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Question fetched successfully",
            data:question
        })
    }
    catch(error){
        next(error);
    }
}

async function searchQuestion(req,res,next){
    try{
        const {text,tag}=req.query;
        const questions=await questionService.searchQuestion(text,tag);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Questions fetched successfully",
            data:questions
        })
    }
    catch(error){
        next(error);
    }
}

module.exports={
    createQuestion,
    getQuestion,
    searchQuestion
}