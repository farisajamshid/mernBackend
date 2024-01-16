const user =require("../Models/User")
const tokengeneration=require("./tokengeneration")
//const jwt=require("jsonwebtoken")

const Details=async(req, res)=>{
// console.log(req.headers)
//res.send("Fetch users")
  // let _id=req.params.id
  // console.log(req.headers)
  const{token}=req.body
  // console.log(token)
  
  try{
   let doc=await user.find({})
   //console.log(req.headers) 
  //  res.json(doc)
  res.status(200).send({ok:"true"})
  
  }catch(error)
  {
    // console.log(error)
  }
    
}
module.exports=Details