
const express=require("express");
const lccontroller=require("../controller/loginController")
const router=express.Router();
//login a url 

router.get("/" ,lccontroller.getlogin )

module.exports=router;