
const connection=require("../databaseconfig/dbconnection");
//display the page and render it on ejs \
//
exports.getlogin=(req , resp)=>{
    console.log(req.url+"-------inside login----------"+req.method);
    //rendeer add a prefix for emplogin 
    resp.render("emplogin");

}
exports.validateuser=(req , resp)=>{
    console.log("inside a validator"+req.url);
    
    //destructor data
    const {email , password}=req.body;
    console.log(email+" ----------"+password);
   //validate the user
   connection.query("select * from employees where email=?" , [email],async(err , result , filed)=>{
    //   var user=result[0];
    // console.log(user);
    if(err){
      
        resp.send("<h1> invalid data </h1>");
    }else{
        var user=result[0];
        //console.log(user);
        if(user.password===password){
        resp.send("<h1>login sucssfully </h1>");
    }

    }
    

   })
    

}
