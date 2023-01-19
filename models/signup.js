const {model,Schema} =require("mongoose");

const signInSchema=new Schema({
    email:String,
    password:String
});

const signInModel=model("register",signInSchema);
module.exports=signInModel;