const express = require('express');
const {TopicController}=require('../../controllers');
const topicRouter=express.Router();


topicRouter.post('/', TopicController.createTopic);
topicRouter.get('/',TopicController.getAllTopics);


module.exports=topicRouter;