
const express=require("express");
const lccontroller=require("../controller/loginController")
const router=express.Router();
//login a url 

router.get("/loginuser" ,lccontroller.getlogin )
router.post("/validate" ,lccontroller.validateuser)
module.exports=router;