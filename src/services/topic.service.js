const {StatusCodes}=require('http-status-codes');
const BadRequest = require('../errors/badrequest');
class TopicService{
    constructor(topicRepository){
        this.topicRepository=topicRepository;
    }

    async createTopic(name){
    //  const alreadytopic=await this.topicRepository.FindByName(name);
    const topics=await this.topicRepository.getName(name);
     if(topics){
        throw new BadRequest(`Topic ${name} already exists`);
     }  
     try{
        const topic=await this.topicRepository.createTopic(name);
        // console.log(topic);
        return topic;

     }
     catch(error){
        console.error(error);
        throw error;
     }
    }
    async getAllTopics(){
        try{
            const topics=await this.topicRepository.getAllTopics();
            return topics;
        }
        catch(error){
            console.error(error);
            throw error;
        }
    }
}

module.exports=TopicService;