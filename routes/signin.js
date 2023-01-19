const express=require("express");
const app=express();
app.use(express.json());
const userRegisterModel=require("../models/signup");

app.post("/",async(req,res)=>{
    const data=req.body;
    // console.log(data);
try{
   if(data.email!=="" && data.password!==""){
   let res1= await userRegisterModel.findOne({email:data.email});
   if(res1){
    res.send({msg:'user already registered'})
   }
   else{
    await userRegisterModel.create({email:data.email,password:data.password});
    res.send({msg:"ok"})
   } 
   }
   else{
    res.send({msg:"no"})
   }
    
}
  catch(e){
    res.send({msg:"no"})
  } 
})


module.exports=app;



