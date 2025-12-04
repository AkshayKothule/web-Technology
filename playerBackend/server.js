//all confi 
const express=require('express');
const cors=require('cors')
const bodyparser=require('body-parser');
const mysql=require('mysql2');
const  app=express();

app.use(cors())
app.use(bodyparser.json());

//db connection 
const dbconnection=mysql.createConnection({
    host:'localhost',
    user :'root' ,
    password :'root*123',
    database :'playerDb'

})
//database connection
dbconnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Connection is establised");
    }
})

//get method 
app.get("/player" , (req , resp)=>{

   dbconnection.query("select * from player" , (error , result)=>{

    if(error){
        resp.status(500).json({messge : "error in get  "})
    }

    resp.status(200).json({data : result});
    

   })

   // post me"name": "virat",
            // "matchesplayed": 10,
            // "totalruns": 200,
            // "fiftes": 10,
            // "hundreds": 100,
            // "teamName": "india"thod 

   app.post("/player" , (req , resp)=>{

    const {name ,matchesplayed , totalruns ,fiftes , hundreds ,teamName  }=req.body;
    const sql="insert into player values(?,?,?,?,?,?)";
    dbconnection.query(sql ,[name ,matchesplayed , totalruns ,fiftes , hundreds ,teamName ],(error , result)=>{

        if(error){
            resp.status(500).json({messge : "data is not inserted ....."});
        }

        resp.status(200).json({messge :"data is inserted sucessfully ....."});
     })

   })

   //deleted a method 
   app.delete("/player/:name" , (req , resp)=>{
  const sql="delete from player where name=?"
    dbconnection.query(sql, [req.params.name], (error , result)=>{

        if(error){
            resp.status(404).json({message : "Not Found and not deleted "})
        }

        resp.status(200).json({message :"deleted sucessfully !!!!! "});


    })

   })

   //get a single record 
   app.get("/player/:id" , (req , resp)=>{

    dbconnection.query("select * from player where id=? ", [req.params.id] , (error , result)=>{

        if(error){
            resp.status(200).json({message : "id is Not Found !!!!!"});
        }
        resp.status(200).json({data :result})

    })

   })

  
    
})
app.listen(3333 , ()=>{
    console.log('server running on port number 3333');
})
