

const JWT= require("jsonwebtoken")
const user= require("../Models/User")
 const requireSignIn= async(req, res, next)=>{
    if(req.headers.authorization && req.headers.authorization. startsWith("Bearer"))
    {

try{
   
    token=req.headers.authorization.split(" ")[1];
    const decode= JWT.verify(token, process.env.JWT_SECRET) 
    // console.log(decode.id)
    
      req.user=decode.id
   // req.user=decode 
  // console.log(req.user.name)

    next()
}
    
    catch(error)
{
    // console.log(error)
}
    }

}
// admin access
 const isAdmin=async(req, res, next)=>
{
    try{
        // console.log(req.user)

        const user1= await user.findById(req.user)
        if(user1.usertype !=="Admin")
        {
           return res.status(401).send({success:false,
            message:"UnAuthorized access",
        })
        }
        else{
            next()
        }

    }
    catch(error)
    {
        // console.log(error)
    }
}
 module.exports={requireSignIn,isAdmin }