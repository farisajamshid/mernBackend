const user=require("../Models/User")
const Delete= async(req, res)=>{
    
    // console.log(token)
    let _id=req.params.id
    const{name, email, password}=req.body

    await user.findByIdAndRemove(_id)
    res.json({msg:"Deleted"})
}
module.exports=Delete