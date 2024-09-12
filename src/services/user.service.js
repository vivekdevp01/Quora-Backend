
class UserService{
    constructor(userRepository){
        this.userRepository=userRepository;
    }

    async createUser(userData){
        try{
            const user=await this.userRepository.createUser(userData);
            return user;
        }
        catch(error){
            
            throw error;
        }
    }
    async getUser(id){
        try {
            const user=await this.userRepository.getUser(id);
            return user;
        } catch (error) {
        
            throw error;
            
        }
    }
    async updateUser(id,userData){
        try {
            const user=await this.userRepository.updateUser(id,userData);
            return user;
        } catch (error) {
    
            throw error;
        }
    }
}

module.exports=UserService;