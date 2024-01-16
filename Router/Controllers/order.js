const order=require("../Models/Order")
 const getOrder=async (req, res)=>{
    try{
        const data=await order.find({buyer:req.user}).populate("buyer","name").populate("products","name")
        res.json(data)

    }catch(error)
    {
        // console.log(error)
    }
 }
 const getAllOrders=async (req, res)=>{
    try{
        const data=await order.find({}).populate("buyer","name").populate("products","name").sort({createdAt:-1})
        res.json(data)

    }catch(error)
    {
        // console.log(error)
    }
 }
//  Api for Order updation status by Admin
 const orderUpdate=async(req, res)=>{
    try{     
        //  console.log("Hai")
        const _id=req.params.id
    //    console.log(req.body)
       
    //   console.log(status)
     
        let doc= await order.findById({_id})
 if(doc)
 { const data=await order.findByIdAndUpdate(_id, req.body,{ new: true } );
//    console.log(data) 
  res.json(data)     
        }
          
        // console.log(data)

    }catch(error)
    {
        // console.log(error)
    }
 }
 module.exports={getOrder, getAllOrders,orderUpdate }