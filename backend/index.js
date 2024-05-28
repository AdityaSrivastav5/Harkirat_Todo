const express = require("express");
const { createTodo } = require("./types");
const port = 4002;


const app = express();

app.use(express.json());


app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg : "tou have sent the wrong input "
    })
    return;
  }
  
});

app.get("/todos", (req, res) => {
    
  });

app.put("/completed", (req,res)=> {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg : "tou have sent the wrong input "
    })
    return;
  } 
});

app.listen(port,()=>console.log(`Server started at Port ${port}`));