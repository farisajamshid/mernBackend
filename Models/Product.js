const mongoose=require("mongoose")
//Modal for Product

const productSchema= mongoose.Schema({name:{type:String}, description:{type:String, required:true}, price:{type:String, required:true}, category:{type:mongoose.ObjectId, ref:"Categorymodel"}
,price:{type:Number}, quandity:{type:Number}, image:{type:String}, shipping:{type:Boolean}}, {timestamps:true})
   
const product=mongoose.model("Productmodel", productSchema)
module.exports=product