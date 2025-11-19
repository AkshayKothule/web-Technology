
//imports all libarary
const express=require("express");
const router=express.Router();
const logincontroller=require("../controller/loginController")
//login url
//router.get("/loginuser",lccontroller.lo)
router.post("/loginuser",logincontroller.validateUser);
//exports
module.exports=router;