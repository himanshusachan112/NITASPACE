const express=require("express");
const app=express();
require("dotenv").config();
PORT=process.env.PORT || 4000
const cors=require("cors");
const fileupload=require("express-fileupload");
const cookieparser=require("cookie-parser");
const {databaseConnect}=require("./config/ConnectToDatabase");
const {cloudinaryConnect}=require("./config/ConnectToCloudinary");
//
const authroutes=require("./routes/auth");
const userroutes=require("./routes/user");
//
app.use(express.json())
app.use(cookieparser());
app.use(cors({
    // origin:true,
    origin:"http://localhost:3000",
    credentials:true,
}))
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/',
}))
databaseConnect();
cloudinaryConnect();
//
app.use("/api/v1/auth",authroutes);
app.use("/api/v1/user",userroutes);
//
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Server is Up and Running.....",
    })
})
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})