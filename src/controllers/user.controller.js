const BadRequest = require("../errors/badrequest");
const NotImplemented = require("../errors/notimplemented");

function ping(req,res){
    res.json({message:"hey"})
}

function add(req,res,next){
    try{
throw new BadRequest("add","it is a bad request");
    }
    catch(err){
        next(err);
    }
}


module.exports={
    ping,
    add
}