const loginModule=require('../module/login')
const bcrypt = require('bcrypt');
const saltRounds = 8;


exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const data=await loginModule.findOne({email:email})
        const isMatch = await bcrypt.compare(password, data.password);
        if(isMatch)
        {
            res.send({status:200,data:true})
        }
        else{
            res.send({status:404,data:false})
        }
    }
    catch(err){
        res.status(401).json({msg : err.message});
    }
}

