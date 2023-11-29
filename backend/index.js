const express = require("express")

const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Full Stack Linkedin App");
})



app.listen(8080,()=>{
   console.log({msg:"server is running on port 8080"})
})