const express = require("express");
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require("path");
const methodOverride = require('method-override');
const app = express();
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
var cors = require('cors');

//Configuracion
app.use(session({
    secret: "It's the secret",
    resave: false,
    saveUninitialized: false,
    duration: 30 * 60 * 1000,
}));



app.use(methodOverride('_method'));
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Template Engine
app.set('view engine', 'ejs');

 app.use(
     cors({
        origin:'*' 

     })
 )


// Routers constantes
const mainRoutes = require('./routers/main');
const userRoutes = require('./routers/users');
const prodRoutes = require('./routers/products');
const userApiRoutes = require('./routers/api/apiUsers');
const productsApiRoutes = require('./routers/api/apiProducts')

app.use(express.static(path.join(__dirname, "/public")))

// Servidor
// se cambia local host a 3001 para no generar conflicto con React
app.listen(3001, () => {
    console.log("Servidor encendido");
})



// Routeo
app.use("/", mainRoutes);
app.use('/products', prodRoutes);
app.use('/users', userRoutes);
app.use('/api/apiUsers', userApiRoutes);
app.use('/api/apiProducts', productsApiRoutes);
