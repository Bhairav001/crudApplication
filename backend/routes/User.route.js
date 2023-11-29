const express = require("express");

const userRouter = express.Router();


userRouter.post("/register",(req,res)=>{
    
    res.send({"msg":"User Registered"});
    console.log({msg:"User Registered"});
})


userRouter.post("/login",(req,res)=>{
    res.send({"msg":"User Login"});
    console.log({msg:"User Login"});
})

module.exports={
    userRouter
}