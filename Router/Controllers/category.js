// Import required packages  nad Controlers
const cat=require("../Models/Category")
//const slugify=require("slugify")
// API for category creation
const categorycreation=async(req,res)=>{
   
    try{
      
        const {name}=req.body
     console.log(name)
    let category=await cat.create({name})
        
    
    res.status(200).send({success:"true", msg:"Category created",categories})
    
}catch(error)
{
    res.send(error)
}
}
// API for get all Categories
const getCategories=async(req,res)=>{
   
    try{
       
    
    let categories=await cat.find()
        
    res.json(categories)
   //res.status(200).send({success:"true", msg:"Category Displayed", categories})
    
}catch(error)
{
    res.send(error)
}
}
// API for Category Updation
const categoryupdate=async(req,res)=>{
   
    try{
        
        const _id=req.params.id
      let {name}=req.body

        let doc= await cat.findById({_id})
       
        if(doc)
        {
     const updatecategory= await cat.findByIdAndUpdate(_id, {name})

    
    res.status(200).send({success:"true", msg:"Category deleteted", updatecategory})
}
else{
    res.send({success:"false", msg:" no such id"})
}
    
}catch(error)
{
    res.send(error)
}
}

//API for Category Deletion
const categorydelete=async(req,res)=>{
   
    try{
        
        const _id=req.params.id
   
        let doc= await cat.findById({_id})
    
        if(doc)
        {
     const deletecategory= await cat.findByIdAndRemove(_id)

    
    res.status(200).send({success:"true", msg:"Category deleteted"})
}
else{
    res.send({success:"false", msg:" no such id"})
}
    
}catch(error)
{
    res.send(error)
}
}
// Export all Categories for Exsternal Use
module.exports={categorycreation,getCategories, categoryupdate,categorydelete }