const bcrypt=require("bcrypt")
const user=require("../Models/User")
const tokengeneration=require("./tokengeneration")
//const { json } = require("express")
const Login= async(req, res)=>{try{
   const {email, password}=req.body
   const usercheck= await user.findOne({email})
   if(usercheck)
   {
    if(usercheck.email ===email &&  (await bcrypt.compare(password, usercheck.password)))
{
    
  
   const token=tokengeneration(usercheck._id)
//    res.json({Name:usercheck.name, Email:usercheck.email,Password: usercheck.password, Token:tokengeneration(usercheck._id)})
  // res.status({Name:usercheck.name, Email:usercheck.email,Password: usercheck.password})
  res.status(200).send({success:true, message :"Login Successfully", user:{Name:usercheck.name, usertype:usercheck.usertype, Email:usercheck.email,Password: usercheck.password, Address:usercheck.address}, token })


  
 

}

else{
    res.status(403).json({error: "Invalid password"})
}
   }
   else
   {
    res.send("Invalid Id")
   }
}
catch(Error)
{
    res.send(Error)
}
}



module.exports=Login