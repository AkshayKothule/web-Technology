//all config

const express=require("express");
const productrouter=require("./router/productRouter")
const app=express();

//middleware
app.use(express.json());
app.use("/" , (req , resp , next)=>{
    console.log(req.url+"----------"+req.method);
    console.log("inside a middlewre ");
    next();
    
})

//product url

app.use("/product" , productrouter);

app.listen(3333 , ()=>{
    console.log("server runing on port number 3333");
})
