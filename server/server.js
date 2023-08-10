const express=require('express')
require('dotenv').config();
require('./db/config')

const app=express();
const port=process.env.PORT||5000;

const hrRoutes = require('./routes/hrRoutes');
const employeRoutes = require('./routes/employeRoutes');
const leaveRoutes = require('./routes/leaveRoutes');

app.use('/api', hrRoutes);
app.use('/api', employeRoutes);
app.use('/api', leaveRoutes);


app.use(express.json());
app.get("/",(req,res)=>{
    res.json({"Project name":"hrms"});
})
app.listen(port,()=>{
    console.log("listening");
})