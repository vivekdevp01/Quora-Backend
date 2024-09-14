const express=require('express');
const {AnswerController}=require('../../controllers');
const answerRouter=express.Router();

answerRouter.post('/:questionId/answers/',AnswerController.createAnswer);
answerRouter.get('/answers/:id',AnswerController.updateAnswer);


module.exports=answerRouter;