
const connection=require("../dataconfig/dbconnection")

exports.allprodcts=(req , resp)=>{
    connection.query("select * from product" , (err , result)=>{
        if(err){
            resp.status(404).json({message : "error occurreds"});
        }else{
            resp.status(200).json({data:result});
        }
    })

}

exports.addnewproduct = (req, resp) => {
    const { pid, pname, price, mfg, exp } = req.body;
console.log(req.body);
    const sql = "INSERT INTO product VALUES (?, ?, ?, ?, ?)";

    connection.query(sql, [pid, pname, price, mfg, exp], (error, result) => {
        if (error) {
            return resp.status(500).json({ error });
        }

        resp.status(200).json({
            message: "Successfully added new product"
        });
    });
};

  
    exports.deleteByid=(req , resp)=>{
        console.log(req.params.pid);
        connection.query("delete from product where pid=?",[req.params.pid] ,(err , result)=>{
            if(err){
                resp.status(500).json({Mesaage : "Not Deleted "});
            }else{
                resp.status(200).json({message:"deleted succssfully ......."});
            }
        })
    }
    

    

    exports.singleProduct=(req , resp)=>{
        connection.query("select * from product where pid=?",[req.params.pid],(err , result)=>{
            if(err){
                resp.status(404).json({message :"invalid pid "});
            }else{
                resp.status(200).json({data:result});
            }
        })
    }

    exports.updateproduct=(req , resp)=>{

        //deconstruct
        const {pid , pname , price ,mfg , exp}=req.body;
        console.log(pid);
        connection.query("update product set pname=?, price=? ,mfg=? ,exp=? where pid=?" ,[pname , price ,mfg , exp ,pid  ],(error , result)=>{
            if(error){
                resp.status(404).json({message:"invalid pid "})
            }else{
                resp.status(200).json({message:"successfully update data......."});
            }
        })
    }

