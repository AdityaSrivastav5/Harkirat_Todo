const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const port = 4002;


const app = express();

app.use(express.json());

app.use(cors())


app.get("/", async (req, res) => {
  res.send("Hi ji Chai Coffee Kuch lenge?????"); 
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg : "tou have sent the wrong input "
    })
    return;
  }
  await todo.create({
    title : createPayload.title,
    description : createPayload.description,
    completed : false,
  })

  res.json({
    msg : "todo created"
  })
  
});

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
      todos
    })
  });

app.put("/completed", async (req,res)=> {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg : "tou have sent the wrong input "
    })
    return;
  } 
  await todo.update({
    _id : req.body._id,
  },{
    completed : true,
  })
  res.json({
    msg : "todo updated"
  })
});

app.listen(port,()=>console.log(`Server started at Port ${port}`));