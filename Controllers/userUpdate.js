const user=require("../Models/User")
const hashpasswd=require("./passwordbcrypt")
const Update=async (req, res)=>{
  try{
   const {Name, Address, Password}=req.body
   
  let _id=req.user
  
// console.log(req.body)
const doc=await  user.findById(_id)
// console.log(doc)
 if(doc)
{
 const hPassword= await hashpasswd(Password)
 const updatedUser= await user.findByIdAndUpdate(_id, {name:Name, address:Address, password:hPassword})
//  console.log(updatedUser)
 //res.json(updatedUser)
// if(doc)
// {
  
//    let newdoc= await user1.findByIdAndUpdate(req.user._id, {name, email, password})
//   // console.log(newdoc)
//   res.json(newdoc)
// }
}
}catch(error)
{
  // console.log(error)
}
}
module.exports=Update
   

