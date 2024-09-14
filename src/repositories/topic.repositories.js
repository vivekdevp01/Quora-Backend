const {Topic}=require('../models');

class TopicRepository{
    async createTopic(name){
        try {
            const topic=new Topic({name});
            return await topic.save();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async getName(name){
        try{
            const topic=await Topic.findOne({name});
            return topic;
        }
        catch(error){
            console.error(error);
            throw error;
        }
    }
    async getAllTopics(){
        try {
            const topics=await Topic.find({});
            return topics;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
 
}

module.exports=TopicRepository;