const express= require('express');
const {UserController} = require('../../controllers')
const userRouter=express.Router();

userRouter.get('/ping',UserController.ping);



module.exports=userRouter;