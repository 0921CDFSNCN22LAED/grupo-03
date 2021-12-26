const express = require("express");

const app = express();

const path = require("path");

// Routers constantes
const mainRoutes = require('./routers/main');
const userRoutes = require('./routers/users');
const prodRoutes = require('./routers/products');

const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, "/public")))

// Servidor
app.listen(3000, () => {

    console.log("Servidor encendido");
})

// Configuración
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// Template Engine
app.set('view engine', 'ejs');

// Routeo
app.use("/", mainRoutes);
app.use('/products', prodRoutes);
app.use('/users', userRoutes);