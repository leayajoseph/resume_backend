const mongoose =require("mongoose")

const postSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"signup"
        },
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            default:Date.now
        },
        phone:{
            type:String,
            required:true
        },
        education:{
            type:String,
            required:true
        },
        skills:{
            type:String,
            required:true
        }

    }
)
//here we are giving 3 fields we only need to give userid and post the date is automaticaly updated
module.exports=mongoose.model("blogposts",postSchema)