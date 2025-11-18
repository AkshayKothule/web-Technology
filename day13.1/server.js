//add all library 
const express=require("express");
//config a expresss
const path=require("path");
const session=require("express-session")
const bodyParser=require("body-parser")
const app=express();
const  loginroutes=require("./router/loginRoutes")

// //lisen on port number
// app.listen(3333 , ()=>{
//     console.log("server running on a port number 3333");
// })

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))  

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))


//initialize session object
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false
  })
);
//handle a routes 

app.use("/login",loginroutes)

app.listen(3333,()=>{
    console.log("running at port 3333")
})