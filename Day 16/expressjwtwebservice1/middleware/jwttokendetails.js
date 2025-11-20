const jwt=require("jsonwebtoken")
const JWT_SECRET="mysecretkey"

exports.generateToken=(user)=>{
    // Include minimal info in the token payload
  const payload = { id: user.uid, uname: user.uname, email:user.email };
  
  return jwt.sign(payload, JWT_SECRET, { expiresIn: 200000 });
}

exports.authenticateJWT=async (req, res, next)=> {
    console.log("validated jwt token")
    //retrieve the toke from autherization header
  const auth = req.headers.authorization; // {authorization:"Bearer sldjg345sdkfjskl"}
  if (!auth || !auth.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Missing token' });
  }else{
      const token = auth.split(' ')[1];
      try {
            const payload = jwt.verify(token, JWT_SECRET);
            // attach to request
            req.user = payload; // {id, uname, email,role,iat,exp}
            console.log(req.user)
            next();
        } catch (err) {
    return res.status(401).json({ message: 'Invalid/Expired token' });
  }
  }

  
  
}