const mongoose = require('mongoose')
const brcypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
fullname: String,
address: String,
city: String,
bi: String,
nif: String,
phone:String,
contry:String,
zipcode:String,
username:String,
email:String,
password:String,
nivel:String,
quote:{type:String,default:"You Have no Quote"}


})

 UserSchema.pre('save', function(next){
    const user = this

    if(!user.isModified('password')){
        return next()
    }

    brcypt.genSalt((err, salt) => {
        if(err){
            console.log(err)
        }else{
            brcypt.hash(user.password, salt, (err, hash) => {
                if(err){
                    console.log(err)
                }else{
                    user.password = hash
                    next()
                }
            })
        }
    })
})

const User= mongoose.model('User',UserSchema)

module.exports=User
