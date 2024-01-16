 


const jwt =require('jsonwebtoken');
 const user=require("../Models/User")

const tokenVerification= async (req,res, next)=>{
    let token;
    //console.log(req.headers)
    if(req.headers.authorization && req.headers.authorization. startsWith("Bearer"))
  
  { try 
   {
    
        token=req.headers.authorization.split(" ")[1];
        let user1= jwt.verify(token, process.env.JWT_SECRET)
        //  console.log("farisa") 
         

         let uid=user1.id
         let userdoc=await user.findById(uid)
         next()
        
        
      
    }catch(error)
    {
         res.status(401).send("Login failed");
        // console.log(error)
        //throw new Error("Not authorized, token")
    }
}
if(!token)
{
    res.status(401).send("No Token");
  //  throw new Error("Not authorized, token")  
}
}
module.exports = tokenVerification
