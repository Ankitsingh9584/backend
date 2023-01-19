
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

// routes import
const userRegisterRoute=require("./routes/signin");
const userLoginRoute=require("./routes/login")



app.use("/register",userRegisterRoute)
app.use("/login",userLoginRoute)





// server starting
app.listen(8080,async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/mock11");
    console.log("server started on port 8080")
})


