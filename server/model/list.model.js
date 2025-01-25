
const mongoose=require('mongoose');
const TodoSchema=mongoose.Schema({
    Task:String,
    completed:Boolean
},{
    timestamps:true,
    versionKey:false
})
const Model=mongoose.model('ToDo',TodoSchema);
module.exports=Model;
