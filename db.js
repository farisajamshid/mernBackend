
// Mongo DB Connection File
const mongoose=require("mongoose")
const db=async ()=>{
    try
    {
        // const constr="mongodb+srv://farisajamshid:Elanehsan@database.ebctjrd.mongodb.net/"
        const condb= await mongoose.connect(process.env.CONNSTR,{useNewUrlParser:true, useUnifiedTopology:true})
          console.log("dbConnected")

    }
    catch(err)
    {
         console.log(`error ${err}`)
        process.exit()

    }
}

module.exports=db
// process.env.CONNSTR