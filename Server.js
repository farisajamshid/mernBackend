// Server, run on the port 8010 
const express=require("express")
//import Router File
const router=require("./Router/route")
// import Environ ment file
const dotenv= require("dotenv")
// import db
const db=require("./db")
//import cors for backend And frontend smooth execution
const cors=require("cors")
const path=require("path")

// import middleware for isUser and isAdmin verification
//const {errorMiddleWareHandler}=require("./Middlewares/errorMiddlewareHandler")
// Server application creation
const app= express()
// middlewares
app.use(cors())
app.use(express.json())
//app.use(express.static(path.join(__dirname,'./fronttend/build')))



dotenv.config()
//console.log(process.env)
db()
// will routing mentioned route in the link
app.use("/", router)
//  app.use("*", function(req, res)
//  {
//      res.sendFile(path.join(__dirname, "./fronttend/build/index.html"))
//  })
// server listerning and running over the port 8010
const port=8010
app.listen(port,()=>{
     console.log(`Server is Started with port ${port}`)
})





