const express = require('express')
const app = express()
const db = require('./model/connection')
app.use(express.json())



//create user
app.post("/adduser",(req,res)=>{

const user = {name:req.body.name,email:req.body.email,phone:req.body.mobile,city:req.body.city}
let sql = "INSERT INTO `employee`  SET ?"
db.query(sql,user,(err,result)=> {
    if(err) throw err;
    else res.json(result)
})
})

//Show user
app.get("/showuser",(req,res)=>{
    let sql ="SELECT * FROM `employee`"
    db.query(sql,(err,result)=>{
        if(err) throw err
        else
        res.json(result)
    })
})

//Show a particular user
app.get("/showuser/:email",(req,res)=>{
    let sql = `SELECT * FROM employee WHERE email ='${req.params.email}'`
    db.query(sql,(err,result)=>{
        if(err) throw err
        else
        res.json(result)
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))
