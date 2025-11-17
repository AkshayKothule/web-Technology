//addd a cofig 
const express=require("express");
const bodyparser=require("body-parser");
const app=express();
//imports a module 
const m1=require("./cal")

//parser a config 
//it is for qurystring and  separation  bet url and data 
bodyparser.urlencoded({extended:false})
//add a middleware 
app.use((req , resp , next)=>{
    console.log(req.url+"----------"+req.method);
next(); //call to the next response 

})

app.get("/form" , (req , resp)=> {
    console.log(req.url+"------------"+req.method);
    resp.sendFile("/public/newform.html" , {root:__dirname});

})
app.get("/form-data" , (req , resp)=>{
    console.log(req.url+"-----------------"+req.method);
    //check the url and parse the data and validate method 
    console.log(req);
    if(req.query.add=="add"){
        var num1=parseInt(req.query.num1);
        console.log("value of num1"+num1);
        var num2=parseInt(req.query.num2);
        console.log("value of num2"+num2);
        var ans=num1+num2;
        resp.send(`<h1> sum of ${num1} and ${num2} : ${ans} </h1>`);

    }else if(req.query.sub=="sub"){
        var num1=parseInt(req.query.num1);
        var num2=parseInt(req.query.num2);
        //use a here imports module subtract method 
       var ans= m1.substract(num1 , num2);
        resp.send(`<h1> sub of ${num1} and ${num2} : ${ans} </h1>`);

    }
})
app.listen(3333 , ()=>{
    console.log(" server running on port 3333");

})