const express=require('express')
require('dotenv').config();
require('./db/config')

const app=express();
app.use(express.json());
const port=process.env.PORT||5000;

const userRoutes = require('./routes/userRoutes');
const employeRoutes = require('./routes/employeRoutes');
const payRoutes = require('./routes/payRoutes')
const leaveRoutes = require('./routes/leaveRoutes');

app.use('/api', userRoutes);
app.use('/api', employeRoutes);
app.use('/api',payRoutes);
app.use('/api', leaveRoutes);


app.get("/",(req,res)=>{
    res.json({"Project name":"hrms"});
})
app.listen(port,()=>{
    console.log("listening");
})