//add all library 
const express=require("express");
//config a expresss

const app=express();


//lisen on port number
app.listen(3333 , ()=>{
    console.log("server running on a port number 3333");
})