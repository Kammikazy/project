const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const app= express()

app.use(session({
  secret: 'andersonmendesdev',
  resave: false,
  saveUninitialized: false
}))
mongoose.Promise=Promise
mongoose.connect('mongodb://localhost:27017/GestStocks')
.then((err)=>console.log('mongoose UP'))

const User=require('./models/users')
app.use(bodyParser.json())

app.post('/api/login', async (req,res)=>{
  const {username,password}=req.body
  const resp = await User.findOne({ username: username}).select('+password')
  if(password==null){
    res.json({success:false,
      message:"  password can not be empty"
    })

  }else if(username==null){

    res.json({success:false,
      message:" username can not be empty "
    })
  }
  else if(!resp){
    res.json({success:false,
      message:"incorrect password"
    })

  }
  else if(!await bcrypt.compare(password, resp.password)){
//if(!resp){

  res.json({success:false,
    message:"incorrect password"
  })
}else {
  ///sessions
  req.session.user=username
  req.session.save()

  res.json({
    success:true
  })

}

})

app.get('/api/isLoggedIn',(req,res)=>{
  res.json({
    status: !!req.session.user
  })
})
app.post('/api/register', async (req,res)=>{
const {fullname,address,city,bi,nif,phone,contry,zipcode,username,email,password}= req.body
const existingemail = await User.findOne({email})
const existingUser =  await User.findOne({username})

if(existingemail){
  res.json({
    success:false,
    message:"Email Existe"
  })
return
}

else if(existingUser){
  res.json({
    success:false,
    message:"username Existe"
  })
return
}
const user= new User({
fullname,
address,
city,
bi,
nif,
phone,
contry,
zipcode,
username,
email,
password
})
const result = await user.save()
res.json({
  success:true,
  message:"welcome"
})
 require('./mail')(req.body.email, 'Bem vindo ao nosso chat', 'Olá ' + req.body.username + ', obrigado por se cadastrar!')
//Usermodel.save({})
})

app.get('/api/data',async (req , res) => {

    const user =await User.findOne({username:req.session.user})
    if(!user){
      res.json({
      status:false,
      message:"USer was deleted"
    })
    return
  }
res.json({
  status:true,
username:req.session.user,
quote:user.quote
})
})

app.get('/api/logout',(req , res) => {

  req.session.destroy()
  res.json({
success:true
  })


})

app.listen(3001,()=>console.log('Server listening 3001'))
