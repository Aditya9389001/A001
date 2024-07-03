require("dotenv").config();  //  You can use dotenv in your application
const express=require("express");
const app=express();
const contactRoute=require("./router/form-router");
app.use(express.json()); 

app.use("/api/form",contactRoute); 


const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Port is running at ${PORT}`);
})

