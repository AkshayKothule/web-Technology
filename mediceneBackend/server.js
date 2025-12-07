
//all lib

const express=require("express");
const mysql=require('mysql2');
const cors=require('cors');
const bodyparser=require("body-parser");



//db connection 

const dbconnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root*123',
    database:'mediceneDb'


})
const app=express();
app.use(cors());
// app.use(bodyparser.json());
app.use(express.json());


//api

app.get("/getmedicene" , (req , resp)=>{
  const sql="select * from medicene";
    dbconnection.query(sql ,(err , result)=>{
        if(err){
            resp.status(500).json({message : "unable to fetch data"});
            return;
        }
       
         resp.status(200).json({data : result});

    })
//post
   

    })
 app.post("/addmedicene", (req, resp) => {

    const { mediceneName, mediceneType, Qty, Price } = req.body;

    console.log("Received:", req.body);

    const sql = "INSERT INTO medicene (mediceneName, mediceneType, Qty, Price) VALUES (?, ?, ?, ?)";

    dbconnection.query(sql, [mediceneName, mediceneType, Qty, Price], (error, result) => {

        if (error) {
            console.log(error);
            return resp.status(500).json({ message: "Database Error" });
        }

        return resp.status(200).json({ message: "Inserted Successfully" });
    });
});

 app.delete("/delete/:name", (req, resp) => {
    console.log("inside deleteMedicine");
    console.log(req.params.name);  // correct param name

    const sql = "delete from medicene where mediceneName=?";

    dbconnection.query(sql, [req.params.name], (error, result) => {

        if (error) {
            return resp.status(500).json({ message: "Database Error" });
        }

        if (result.affectedRows === 0) {
            return resp.status(404).json({ message: "Not Deleted" });
        }

        return resp.status(200).json({ message: "Successfully deleted!" });
    });
});

app.put("/update/:mediceneName", (req, res) => {

    const oldName = req.params.mediceneName;  // Name coming from URL
    console.log(oldName);
    console.log(req.body);
    const { mediceneType, Qty, Price } = req.body;

    const sql = "UPDATE medicene SET mediceneType=?, Qty=?, Price=? WHERE mediceneName=?";

    dbconnection.query(sql, [mediceneType, Qty, Price, oldName], (error, result) => {

        if (error) {
            console.log(error);
            return res.status(500).json({ message: "Database Error" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Medicine Not Found" });
        }

        return res.status(200).json({ message: "Updated Successfully!" });
    });
});


app.listen(3333 , ()=>{
    console.log("Server running on port number 3333");
})