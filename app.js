const express = require("express");

const app = express();

const path = require("path");

const routers = require('./routers/main');

app.use(express.static(path.join(__dirname, "/public")))

app.listen(3000, () => {

    console.log("Servidor encendido");
})

app.use("/", routers);

app.use("/login", routers);

app.use("/register", routers);

app.use("/productDetail", routers);

app.use("/productCart", routers);

app.use("/armaTuPc", routers);

app.use("/recupero", routers);

app.use("/history", routers);