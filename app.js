const express = require("express");

const app = express();

const path = require("path");

const routers = require('./routers/main');

const methodOverride = require('method-override');


app.use(express.static(path.join(__dirname, "/public")))

app.listen(3000, () => {
    
    console.log("Servidor encendido");
})

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use("/", routers);