const express=require("express")
const expressRoutes = require("./routes/task.routes")
const connection = require("./utlis/db")
const app=express()
app.use(express.json())
require("dotenv").config()


app.use("/api",expressRoutes)

app.listen(process.env.PORT,async()=>{
    try {
     await connection
      console.log(`server is running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
   
})