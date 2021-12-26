const express = require("express");
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require("path");

const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

//Configuracion
app.use(session({
    secret: "It's the secret",
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());

app.use(userLoggedMiddleware);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// Template Engine
app.set('view engine', 'ejs');


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

// Routeo
app.use("/", mainRoutes);
app.use('/products', prodRoutes);
app.use('/users', userRoutes);