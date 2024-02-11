const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const signupRoute=require("./controller/signupRouter")
const postRoute=require("./controller/postRouter")


const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://leaya:Leaya231@cluster0.sxtvlhw.mongodb.net/resumeDb?retryWrites=true&w=majority",{
useNewUrlParser: true
})

app.use("/api/signup",signupRoute)
app.use("/api/post",postRoute)

app.listen(3001,()=>{
    console.log("server running")
})