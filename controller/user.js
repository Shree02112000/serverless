module.exports.getUser=async(event,context,callback)=>{
  let user = {"name":"shree","user_id":"02"} ;
  let response ={
    "user_exists":true,
    "user_data": user
  }
  if(user){
     return{statuscode:200,body:JSON.stringify(response)}
  }else{
    return{statuscode:200,body:JSON.stringify(response)}
  }
}
  

