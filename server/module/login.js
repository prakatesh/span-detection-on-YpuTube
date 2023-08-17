const mongoose=require('mongoose')
const loginScheme=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const loginModule=mongoose.model('login',loginScheme,'login')

module.exports=loginModule