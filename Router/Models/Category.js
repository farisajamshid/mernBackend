const mongoose=require("mongoose")
// modal for category
const categorySchema= mongoose.Schema({name:{type:String, required:true}})
   
const category=mongoose.model("Categorymodel", categorySchema)
module.exports=category