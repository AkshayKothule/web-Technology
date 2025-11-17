
//import all library
const  express=require("express");
const bodyparser=require("body-parser");

//config the url
bodyparser.urlencoded({extended:false});
const app=express();
//add middaleware 
app.use("/"  ,(req , resp , next)=>{
    console.log("frist middleware is called !!!!!!!!!");
    console.log(req.url+"-----------"+req.method);
    next(); //goes to the next a requst 
})

//method calls after a middleware 
app.get("/form" ,(req , resp)=>{
    console.log("inside a form req------------------")
    console.log(req.url+"--------"+req.method);
    resp.sendFile("/public/form.html" , {root:__dirname});
})

//write a url and parse a data and separation bet url and data 
app.get("/form-data",(req , resp)=>{
    console.log(req.url+"this is form data "+req.method);
    var name=req.query.nm;
    var email=req.query.em;
    var pass=req.query.pass;
    console.log(name+" "+email+" "+pass);
    resp.send(`<h1> form data is ${name} ${email} ${pass} </h1>`);

})
app.listen(3333 , ()=>{
    console.log("run on a port number 3333");

})

