const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email').notEmpty().withMessage('Tienes que ingresar un email').bail()
    .isEmail().withMessage('Tienes que escribir un email valido').bail(),
    body('password').notEmpty().withMessage('Tienes que ingresar un password'),
    body('repassword').notEmpty().withMessage('Tienes que ingresar un password'),
    body('phone').notEmpty().withMessage('Tienes que ingresar un telefono').bail()
    .isNumeric().withMessage('Ingresa tu telefono sin guiones ni espacios'),
    body('adress').notEmpty().withMessage('Tienes que ingresar una direccion'),
    body('avatar').custom((value, { req }) => {
        let file = req.files;

        let acceptedExtensions = ['.jpg', '.png', '.gif', '.webp'];

        if (file == null) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    })
]