
const bcrypt=require("bcrypt")
const mongoose = require("mongoose")
const user = require("../Models/User")
const epassword=require("./passwordbcrypt")
const Registration=async(req, res)=>{try
  {
   const{usertype,name, email, password, qustion, address}=req.body
   //let salt= await bcrypt.genSalt(10)
   const userExist=await user.findOne({email})

   if(!userExist)

 
  {
  // const hashedpassword=await bcrypt.hash(password, salt)
   const hashedpassword= await epassword(password)

   const userdoc=await user.create({usertype, name, email, password:hashedpassword, qustion, address})
   //res.json({masg:"Successfully registered"})
   
   res.json({Msg:" User Registered Successfuly",_id:userdoc._id, UserType:userdoc.usertype,Name:userdoc.name, Email:userdoc.email,Password: userdoc.password, Address:userdoc.address, Qustion:userdoc.qustion})
   
  }
  else{
    // console.log(" User Exist")
    res.json({masg:"User Exist"})
  }
  }catch(error)
  {
    // console.log(error)
  }
}
  const forgotpassword=async(req, res)=>{
    try
    {
    const {email, password, qustion}=req.body.user
    // console.log(email, password, qustion)
     const user1=await user.findOne({email, qustion})
    //  console.log(user1)
   
if(user1)
 {
   const updatedpasswd=await epassword(password)
   const updatedpassword= await user.findByIdAndUpdate( user1._id, {password:updatedpasswd})
  //  console.log("Updated")
 }
 
  }catch(error)
  {
    // console.log(error)
     }
  }
  
  



module.exports={Registration, forgotpassword}