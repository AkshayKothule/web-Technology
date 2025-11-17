const express=require("express")

const app=express();

//add middleware 
app.use((req , resp , next)=>{
    console.log("Inside frist  a middleware ");
    console.log(req.url+"---------"+req.method);
   next();

})
app.get("/hello" , (req , resp)=>{
    console.log(req.url+"-------"+req.method);
    console.log("welcome in the get method  !!!!!!!");
    // console.log("<h2> this is a hello method ")
    resp.send("<h1> this is hello request </h1>");

})

app.get("/welcome" , (req , resp)=>{
    console.log("inside a welcome method");
    console.log(req.url+"----------"+req.method);
    // resp.sendFile("/public/index.html" , {root:__dirname})
//    resp.sendFile("index.html" , {root:__filename})

})
app.listen(3333 , ()=>{
    console.log("server running on port number 33333");
})