const express = require("express");
const connection=require("../dataConfig1/dbconnection")
const {GenrateToken}=require("../middleware/jwtTokendetails")
exports.validateUser=(req , resp)=>{

    //deconstruct data
    const {email , password}=req.body;
    
    //find user by email from database
    connection.query("select * from employees where email=?" , [email],async(err , result , filed)=>{
   
    if(err){
      
        resp.status(500).json({mesg:"invalid creadential................"});
    }else{
        var user=result[0];
       
        if(user.password===password){
            //user is validate 
            //create a token and pass only nessary details 
            const token=GenrateToken({id:user.id , name:user.name , email:user.email ,salary:user.salary , role:user.role ,department:user.department ,joining_date:user.joining_date});

           resp.json({token})   
        }else{
            resp.status(500).json({mesg:"invalid a token "})
        }

    }
    

   })
    



}