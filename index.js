const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

//ROUTES

// CREATE A TODO
 app.post("/todos", async(req,resp)=>{
    try {
        console.log(req.body);

    }catch(error){
        console.log(error.message);
    }
 })


// GET ALL TODOS



//UNDATE A TODO


//DELECT A TODO



app.listen(5000, ()=>{
    console.log("server has started");
});