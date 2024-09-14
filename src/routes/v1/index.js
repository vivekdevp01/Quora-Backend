const express=require('express');

const userRouter=require('./user.routes');
const questionRouter=require('./question.routes');
const answerRouter=require('./answer.routes');
const v1Router=express.Router();

v1Router.use('/users',userRouter);
v1Router.use('/questions',questionRouter);
v1Router.use('/questions',answerRouter);

module.exports=v1Router;


