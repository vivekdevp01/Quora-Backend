const express= require('express');
const {UserController} = require('../../controllers')
const userRouter=express.Router();

// userRouter.get('/ping',UserController.ping);

// userRouter.post('/add',UserController.add);
userRouter.post('/',UserController.createUser);
userRouter.put('/:id',UserController.updateUser);
userRouter.get('/:id',UserController.getUser);



module.exports=userRouter;