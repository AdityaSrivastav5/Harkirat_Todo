const express = require("express");
const port = 4002;


const app = express();

app.use(express.json());


app.post("/todo", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
    
  });

app.put("/completed", (req,res)=> {

});

app.listen(port,()=>console.log(`Server started at Port ${port}`));