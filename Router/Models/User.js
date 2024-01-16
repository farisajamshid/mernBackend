const mongoose=require("mongoose")
// Modal for User
const userSchema= mongoose.Schema ( {usertype:{type:String, required:true},name:{type:String, required:true}, email:{type:String, required:true}, password:{type:String, required:true}, qustion:{type:String, required:true}, address:{type:String} })
   let user= mongoose.model("usermodel", userSchema)

module.exports=user
