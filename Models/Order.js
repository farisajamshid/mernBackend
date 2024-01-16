const mongoose=require("mongoose")
// Modal for Order
const orderySchema= mongoose.Schema({
    products:[{
        type:mongoose.ObjectId,
        ref:"Productmodel"
    },],
    payment:{}, 
    buyer:
    {
        type:mongoose.ObjectId,
        ref:"usermodel",
    },
    status:{type:String,
    default:"Not process",
     enum:["Not process", "Processing", "Shipped", "Delivered"," Cancel"]},

},
{timestamps: true}

)
const order=mongoose.model("Ordermodel",  orderySchema)
module.exports=order