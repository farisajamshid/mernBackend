// Import required packages and Controlers
const product=require("../Models/Product")
var braintree = require("braintree");
const dotenv= require("dotenv")
const orderModel=require("../Models/Order")
dotenv.config()
const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "449xdsq7mhsw676w",
    publicKey: "62dq423bcp8xkkxy",
    privateKey: "3f5b716ce558c412ea6c3d39b3ff04b7"
  });
  // API for Paymentgateway Token
  const braintreeTokenController=async(req, res)=>{
    
       let token=(await gateway.clientToken.generate({})).clientToken
       res.json({data:token})
}


  
  const braintreePaymentController=
  async(req, res)=>{
    try{
    
      //  console.log(req.body, nonce)
        const {cart, nonce}=req.body
    console.log(nonce)
        let total=0;
        cart.map((i)=>{
            total+=i.price
        })
       let newTransaction= await gateway.transaction.sale(
            {
              amount: total,
              paymentMethodNonce:nonce,
              options: {
                submitForSettlement: true,
              },
            },
            function (err, result) {
                if(result)
                {
                    const order=new orderModel({
                        products:cart, 
                        payment:result,
                        buyer:req.user
                    }).save()
                    res.json({ok:true})

                }
                else{
                    res.status(500).send(err)
                }
              }
            );


    }catch(error)
    {
        console.log(error)
    }

  }

// API for Product creation
const productcreation=async(req,res)=>{
   
    try{
         const {name, description, price,quandity, category, image, shipping}=req.body
  
    let productdoc=await product.create({name, description, price,quandity, category, image, shipping})
       res.json(productdoc) 
    
    //res.status(200).send({success:"true", msg:"Product created"})
    
}catch(error)
{
    res.send(error)
}
}
//Api for getProducts


//Api for update products

const productUpdate=async(req,res)=>{
   
    try{
        
        const _id=req.params.id
        let doc= await product.findById({_id})
      const  {name, description, price, category, quandity, image, shipping, }=req.body
        if(doc)
        {
     const updateproduct= await product.findByIdAndUpdate(_id, {name, description, price, category, quandity, image, shipping, })

    
    res.status(200).send({success:"true", msg:"Product updated", updateproduct})
}
else{
    res.send({success:"false", msg:" no such id"})
}
    
}catch(error)
{
    res.send(error)
}
}

//API for Product Deletion
const productDelete=async(req,res)=>{
   
    try{
        // console.log("test")
        
        const _id=req.params.id
   console.log(_id)
        let doc= await product.findById(_id)
    // console.log(doc)
        if(doc)
        {
     const deleteproduct= await product.findByIdAndRemove({_id})

    
    res.status(200).send({success:"true", msg:"Product deleteted"})
}
else{
    res.send({success:"false", msg:" no such id"})
}
    
}catch(error)
{
    res.send(error)
}
}
// API for get Single Product

const getProducts=async(req,res)=>{
   
    try{

    let productdata=await product.find()
        
   res.json(productdata)
//    res.status(200).send({success:"true", msg:"Products Displayed",productdata })
    
}catch(error)
{
    res.send(error)
}
}

const getProduct=async(req,res)=>{
   
    try{
        // console.log("Hello")
       
    // let _id=req.params.id
    //  console.log(req.params.id)
    let productdata=await product.findOne({_id:req.params.id})
    res.json(productdata)
//    res.status(200).send({success:"true", msg:"Products Displayed",productdata })
    
}catch(error)
{
    res.send(error)
}
}

 // Export all Categories for Exsternal Use
module.exports={productcreation, getProducts, productUpdate, productDelete, getProduct, braintreeTokenController, braintreePaymentController}