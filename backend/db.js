const mongoose = require("mongoose");
const { string } = require("zod");
//mongodb+srv://adityasrivastav863:iamaditya05@cluster0.icvsofp.mongodb.net/todos
mongoose.connect("mongodb+srv://adityasrivastav863:iamaditya05@cluster0.icvsofp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/todos")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo : todo
}