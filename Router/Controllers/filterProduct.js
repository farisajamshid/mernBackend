const product=require("../Models/Product")
const cat=require("../Models/Category")
const Price=require("../../fronttend/src/Components/Price")

// API for Flter product Based category
const filterProduct= async(req, res)=>{
    try{
   
    const {checked, radio} = req.body
   // console.log(checked, radio)
    
    let arg={}
  if(checked.length > 0)arg.category=checked
  if( radio) arg.Price ={ $gte: radio[0], $lte:radio[1] }
  //console.log(arg)
 // if(radio.legth) arg.Price={$gte: radio[0],  $lte:radio[1]}
 const fproduct=await  product.find(arg)
 //console.log(fproduct)
 res.json(fproduct)
    }catch(error)
    {
        // console.log(error)
    }
}
//  API's for Pagination
const productCount=async(req, res)=>{
    try{
       

        const total=await product.find({}).estimatedDocumentCount()
         res.status(200).send({sucess:true, total})
    }
    catch(error)
    {
        // console.log(error)
    }
}
const pageList= async(req, res)=>{
    try{
        const perPage=4
        const page=req.params.page? req.params.page: 1
        let pageproduct=await product.find({}).select().skip((page - 1)* perPage).limit(perPage).sort({createdAt : -1})
       res.json(pageproduct)
    }catch(error)
    {
        // console.log(error)
    }
}
const searchProduct=async(req, res)=>{
    try{
        let {keyword}=req.params
        let results=await product.find({
            $or:[
                {name:{$regex: keyword, $options:"i"}},
                {description:{$regex: keyword, $options:"i"}}
            ]
        })
 res.json(results)
//  console.log(results)

    }catch(error)
    {
   console.log(error)
    }
}




module.exports={filterProduct, productCount, pageList, searchProduct}