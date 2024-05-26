const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    hashedpassword:{
        type:String,
        required:true,
    },
    accounttype:{
        type:String,
        enum:["Buyer","seller"],
        required:true,
    },
    forgotpasswordlink:{
        type:String,
    },
    forgotpasswordlinkexpires:{
        type:Date,
    },
    image:{
        type:String,
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    }],
    additionaldetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    }
})

module.exports=mongoose.model("User",userschema);