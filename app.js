const express = require("express");

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname,"/public")))

app.listen(3000,()=>{

    console.log("Servidor encendido");
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})

app.get("/productDetail",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productDetail.html"))
})

app.get("/productCart",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productCart.html"))
})