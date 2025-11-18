const connection=require("../dataConfig1/dbconnection")

exports.validateUser=(req , resp)=>{

    //deconstruct data
    const {email , password}=req.body;
    
    //find user by email from database
    connection.query("select * from employees where email=?" , [email],async(err , result , filed)=>{
   
    if(err){
      
        resp.json({mesg:"invalid creadential................"});
    }else{
        var user=result[0];
       
        if(user.password===password){
            //user is validate 
            //create a token
            var token=GenrateToken(user);


        
    }

    }
    

   })
    



}