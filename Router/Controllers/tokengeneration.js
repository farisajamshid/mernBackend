const jwt=require("jsonwebtoken")
const user=require("../Models/User")
// Api for token generation using JWT
const tokengeneration= (id)=>{
    //return jwt.sign({name}, process.env.JWT_SECRET,{expiresIn:"1d",})
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn:"1d",} )

    //console.log(tokengeneration)
}


module.exports=tokengeneration