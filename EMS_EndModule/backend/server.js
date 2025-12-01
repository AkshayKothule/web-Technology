const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// Root route (Fix 403 Error)
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// DB Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vivek@1709",
    database: "employee_db"
});

// Add employee
app.post("/add", (req, res) => {
    const {emp_id, emp_name, joining_date, designation } = req.body;
    console.log(req.body);
    const sql = "INSERT INTO employees (emp_id,emp_name, joining_date, designation) VALUES (?,?, ?, ?)";
    db.query(sql, [emp_id,emp_name, joining_date, designation], (err, result) => {
        if (err) return res.json({ error: err });
        res.json({ message: "Employee Added!" });
    });
});

// Get employees
app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) return res.json({ error: err });
        res.json(result);
    });
});

// Delete employee
app.delete("/delete/:id", (req, res) => {
    console.log("in deleted");
    console.log(req.params.id);
    db.query("DELETE FROM employees WHERE emp_id=?", [req.params.id], (err, result) => {
        if (err) return res.json({ error: err });
        res.json({ message: "Deleted!" });
    });
});

// Server
app.listen(3333, () => 
    {
            console.log("Backend running on port 3333")
            db.connect((err)=>{
                console.log("db connected successfully");
            });
    }
);
 