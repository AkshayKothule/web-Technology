//include a jwttoken 
const jwt=require("jsonwebtoken")
const JWT_SECRET="mysecretkey"
exports.GenrateToken=(user1)=>{
    //genrate a token 
    //include minium info
    const payload={id:user1.id , name:user1.name , email:user1.email ,salary:user1.salary , role:user1.role ,department:user1.department ,joining_date:user1.joining_date};
   //create a token
    return jwt.sign(payload ,JWT_SECRET ,{ expiresIn: 200000 } );
    

}


//check again
exports.authenticateJWT=async (req, res, next)=> {
    console.log("validated jwt token")
  const auth = req.headers.authorization; // {authorization:"Bearere sldjg345sdkfjskl"}
  if (!auth || !auth.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Missing token' });
  }else{
      const token = auth.split(' ')[1];
      try {
            const payload = jwt.verify(token, JWT_SECRET);
            // attach to request
            req.user = payload; // {id, username, role, iat, exp}
            console.log(req.user)
            next();
        } catch (err) {
    return res.status(401).json({ message: 'Invalid/Expired token' });
  }
  }

  
  
}