const express=require('express');
const {QuestionController}=require('../../controllers');
// const {AnswerController}=require('../../controllers');

const questionRouter=express.Router();

questionRouter.post('/',QuestionController.createQuestion);
questionRouter.get('/search',QuestionController.searchQuestion);
// questionRouter.get('/:id',QuestionController.getQuestion);
// questionRouter.post('/:id/answer',AnswerController.createAnswer);

module.exports=questionRouter;
