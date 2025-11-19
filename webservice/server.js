
//imports all libarary
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const loginrouter=require("./router/loginRouter")
//middleware
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//router config
app.use("/login" , loginrouter);

//router for  employee
app.use("/employee" , employeerouter);

//listen on server
app.listen(3333,()=>{
    console.log("running on port number 3333");

})

