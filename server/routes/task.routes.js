const express=require("express")
const { Getdata, Adddata, Updatedata, Deletedata } = require("../controller/list.controller")


const expressRoutes=express.Router()

//  Get data
expressRoutes.get("/task",Getdata)

// Add Data
expressRoutes.post("/adddata",Adddata)

// Update data
expressRoutes.put("/updatedata/:id",Updatedata)

// delete data
expressRoutes.delete("/deletedata/:id",Deletedata)

module.exports=expressRoutes