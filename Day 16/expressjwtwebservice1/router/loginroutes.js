const express=require("express");
const router=express.Router();
const lcontroller=require("../controller/loginController")


//use url /login/loginuser method post
//in body
/*{
    "email":"user1@gmail.com",
    "password":"user1pass"
}*/
router.post("/loginuser",lcontroller.validateuser)
module.exports=router;