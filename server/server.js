const express=require('express')
require('dotenv').config();
require('./db/config')
const app=express();
const port=process.env.PORT||5000;
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({"Project name":"hrms"});
})
app.listen(port,()=>{
    console.log("listening");
})