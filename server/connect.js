const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://prakatesh2020:kongu2022@cluster0.l7ftk2i.mongodb.net/Paper")
.then(()=>{
    console.log("Db connected successfully")
})
.catch((e)=>{
    console.log("Db connection is failed")
    console.log(e.message)
})