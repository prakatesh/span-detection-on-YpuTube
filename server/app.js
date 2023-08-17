const express=require('express')
const app=express()
const cors = require("cors")
const bodyParser = require('body-parser')
require('./connect')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const router=express.Router()

const {login}=require('./controller/login')
const {sign} = require('./controller/sign')

// app.post('/login',(req,res)=>{
//     console.log(req.body)
// })

app.use("/login",login);
app.use('/sign',sign)

app.listen(8000,()=>{
    console.log("port is listening on 8000")
})