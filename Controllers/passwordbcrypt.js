const bcrypt= require("bcrypt")
// Api for Password Protection using bcrypt library
const epassword= async(password)=>{
    try
    {
    const  salt= await bcrypt.genSalt(10)  
    const hashedpassword=await bcrypt.hash(password, salt)
    return hashedpassword
}
catch(error)
{
    // console.log(error)
}
}
module.exports=epassword