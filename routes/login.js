const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
app.use(express.json());
const userRegisterModel=require("../models/signup");

app.post("/",async(req,res)=>{
    let data=req.body;
   try{
let res1=await userRegisterModel.findOne({email:data.email});
if(res1.email===data.email && res1.password===data.password){
   let token= jwt.sign({id:res1._id}, "SECRET1234", {expiresIn:"7 days"});
 
    res.send({msg:"ok",token:token})
}
else{
    res.send({msg:"no"})
}
   }
   catch(e){
    res.send({msg:"no"})
   }
});


module.exports=app;