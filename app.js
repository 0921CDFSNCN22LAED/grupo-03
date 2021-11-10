const express = require("express");

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "/public")))

app.listen(3000, () => {

    console.log("Servidor encendido");
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productDetail.html"))
})

app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productCart.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

<<<<<<< HEAD
app.get("/armaTuPc",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/armaTuPc.html"))
})

app.get("/recupero",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/recupero.html"))
=======
app.get("/armaTuPc", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/armaTuPc.html"))
})

app.get("/history", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/history.html"))
>>>>>>> 7628709cdd53f6fb94f04c478217a670a7b63de8
})