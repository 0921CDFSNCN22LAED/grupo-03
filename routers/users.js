const express = require("express");

const router = express.Router();

const controller = require("../Controllers/usersControllers");

const upload = require('../middlewares/multer_middlewares.js');

const { body } = require("express-validator");

const validation = [

    body('email').notEmpty().isEmail().withMessage('Escribir un mail'),
    body('password').notEmpty().withMessage('Escribir una contraseña'),
    body('repassword').notEmpty().withMessage('Repita la contraseña'),
    body('name').notEmpty().withMessage('Escribir un nombre'),
    body('lastName').notEmpty().withMessage('Escribir un apellido'),
    body('phone').notEmpty().withMessage('Escribir un numero de telefono'),
    body('adress').notEmpty().withMessage('Escribir una direccion'),
    
]



router.get("/login", controller.login);

router.get("/register", controller.register);

router.post("/register", upload.single('image'),validation, controller.processRegister);

router.get("/recupero", controller.recupero);

router.get("/history", controller.history);

router.get("/allUsers", controller.allUsers);

router.get("/profile", controller.profile)

router.get("/userEdit/:id", controller.userEdit);

router.get("/userDelete/:id", controller.userDelete);

module.exports = router;