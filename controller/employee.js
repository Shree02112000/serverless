
module.exports.assign=async(event,context,callback)=>{
  
  return { statuscode: 200 , body:JSON.stringify({'message':'employee has been assign','status':'success'})}
}