const loginModule=require('../module/login')
const bcrypt = require('bcrypt');
const saltRounds = 8;

exports.sign=(req,res)=>
{
    const {email,password}=req.body
    // const data=loginModule.insertMany({email:email,password:password})
    bcrypt
    .genSalt(saltRounds)
    .then(salt => {
        // console.log('Salt: ', salt)
        return bcrypt.hash(password, salt)
    })
    .then(hash => {
        // console.log('Hash: ', hash)
        const data=loginModule.insertMany({email:email,password:hash})
        res.send({status:200})
    })
    .catch(err => console.error(err.message))
}