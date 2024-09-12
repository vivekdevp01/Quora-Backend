const BadRequest = require("../errors/badrequest");
const NotImplemented = require("../errors/notimplemented");
const {UserRepository}=require('../repositories');
const {UserService}=require('../services');
const {StatusCodes}=require('http-status-codes');

const userService=new UserService(new UserRepository());


async function createUser(req,res,next){
    try {
       const newUser=await userService.createUser(req.body);
       return res.status(StatusCodes.OK).json({
        success:true,
        message:"User created successfully",
        data:newUser
       }) 
    } catch (error) {
       next(error); 
    }
}
async function getUser(req,res,next){
    try {
       const user=await userService.getUser(req.params.id);
       return res.status(StatusCodes.OK).json({
        success:true,
        message:"User fetched successfully",
        data:user
       }) 
    } catch (error) {
        next(error);
    }
}

async function updateUser(req,res,next){
    try{
        const updatedUser=await userService.updateUser(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"User updated successfully",
            data:updatedUser
        })
    }
    catch(error){
        next(error);
    }
}

module.exports={
    createUser,
    getUser,
    updateUser
}