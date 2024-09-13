const express=require('express');
const {QuestionController}=require('../../controllers');

const questionRouter=express.Router();

questionRouter.post('/',QuestionController.createQuestion);
questionRouter.get('/search',QuestionController.searchQuestion);
questionRouter.get('/:id',QuestionController.getQuestion);

module.exports=questionRouter;
