const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const loginroutes=require("./router/loginroutes")
const productroutes=require("./router/productroutes")





//configure application
  
//app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//CORS settings
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//handle routes
app.use("/login",loginroutes)
app.use("/product",productroutes)

app.listen(3333,()=>{
    console.log("running at port 3333")
})

