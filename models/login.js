const {model,Schema} =require("mongoose");

const loginSchema=new Schema({
    email:String,
    password:String
});

const loginModel=model("login",loginSchema);
module.exports=loginModel;