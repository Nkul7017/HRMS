const mongoose=require('mongoose')
mongoose.connect(`${process.env.DB}`)
.then(()=>{
    console.log("Connected Successfully")
})
.catch((e)=>{
    console.log(`error ${e} `)
})