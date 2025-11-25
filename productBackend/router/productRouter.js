
const express=require("express");

const router=express.Router();
const productcontroller =require("../controller/productController")

//fet method
router.get("/products" ,productcontroller.allprodcts);

router.post("/products" ,productcontroller.addnewproduct);

router.delete("/products/:pid" , productcontroller.deleteByid);

router.get("/products/:pid",productcontroller.singleProduct);

router.put("/products/:pid" ,productcontroller.updateproduct);

module.exports=router;