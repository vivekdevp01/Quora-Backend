const {TopicRepository}=require('../repositories');
const {TopicService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const topicService=new TopicService(new TopicRepository());


async function createTopic(req,res,next){
   try{
    const {name}=req.body;
    const topic=await topicService.createTopic(name);
    // console.log(topic);
    return res.status(StatusCodes.OK).json({
        success:true,
        message:"Topic created successfully",
        data:topic
    })
   } 
   catch(error){
    next(error);
   }
}

async function getAllTopics(req,res,next){
    try{
        const topics=await topicService.getAllTopics();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"All topics fetched successfully",
            data:topics
        })
    }
    catch(error){
        next(error);
    }
}

module.exports={
    createTopic,
    getAllTopics,
 };
