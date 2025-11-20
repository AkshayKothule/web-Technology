const connection=require("../databaseconfig/dbconnection")
const bcrypt= require('bcrypt')

//display login form
exports.getLoginForm=(req,resp)=>{
    resp.render("login")
}

//validate user
exports.validateuserdetails=(req,resp)=>{
    //const email=req.body.email;
    //const password=req.body.password;
    //const btn=req.body.btn;
    const {email,password}=req.body;

    connection.query("select * from myusers where email=?",[email],async (err,result)=>{
        if(err){
            console.log("error")
            console.log(err);
        }else{
            if(result.length===0){
                return resp.send("<h1>Invalid user</h1>")
            }else{
                var user=result[0];
                //const ismatch=await bcrypt.compare(password,user.password)        
                if(user.password===password){
                    req.session.user=user;
                    resp.redirect("/product/getproducts")
                    //return resp.send("<h1>valid user</h1>")
                }else{
                    return resp.send("<h1>Invalid user</h1>")
                }
            }
        }
    })



}

exports.getregistrationForm=(req,resp)=>{
    resp.render("register")
}

exports.registeruser=async (req,resp)=>{
    const {uname,email,pass}=req.body;
    //const encryptpass=await bcrypt.hash(pass,10)

    connection.query("insert into myusers(uname,email,password) values(?,?,?)",[uname,email,pass],async (err)=>{
        if(err){
            console.log(err)
        }else{
            resp.redirect("/login");
        }
    })
}

exports.logoutuser=(req,resp)=>{
    req.session.destroy();
    resp.redirect("/login")
}