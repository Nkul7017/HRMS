const express=require('express');
const router = express.Router();
require('dotenv').config();
require('./db/config');

const app=express();
app.use(express.json());

const port=process.env.PORT||5000;

const employeRoutes = require('./routes/employeRoutes');
const userRoutes = require('./routes/userRoutes');
const payRoutes = require('./routes/payRoutes');
const leaveRoutes = require('./routes/leaveRoutes');
const protectedRoutes = require('./routes/protected');

app.use('/api',protectedRoutes);
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