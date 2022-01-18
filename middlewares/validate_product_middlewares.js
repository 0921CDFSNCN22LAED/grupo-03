const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Tienes que escribir el nombre del peoducto').bail()
    .isLength({ min: 5, max: 250 }).withMessage('El nombre debe tener al menos 5 y un maximo de 250 caracteres'),
    body('desc').notEmpty().withMessage('Tienes que escribir la descripcion').bail()
    .isLength({ min: 5, max: 250 }).withMessage('El nombre debe tener al menos 5 y un máximo de 250 caracteres'),
    body('caract').notEmpty().withMessage('Tienes que escribir su característica').bail()
    .isLength({ min: 5, max: 250 }).withMessage('El nombre debe tener al menos 5 y un máximo de 250 caracteres'),
    body('color').notEmpty().withMessage('Tienes que escribir su color'),
    body('precio').notEmpty().withMessage('Tienes que informar su precio').bail()
    .bail().isFloat({ min: 2, max: 200000 }).withMessage('Tienes que informar entre 2 y 6 digitos'),
    body('disc').notEmpty().withMessage('Tienes que informar su descuento').bail()
    .isInt({ min: 0, max: 50 }).withMessage('Tienes que informar un numero entero entre 0 y 50'),
    body('code').notEmpty().withMessage('Tienes que informar el codigo del producto'),
    body('category').notEmpty().withMessage('Tienes que informar su categoria'),
    body('type').notEmpty().withMessage('Tienes que informar su tipo de producto'),
    body('image1').custom((value, { req }) => {
        let file = req.files;
        
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.webp'];

        console.log(file);
        
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    }),
    body('image2').custom((value, { req }) => {
        let file = req.files;
      
       
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.webp'];

        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    }), body('image3').custom((value, { req }) => {
        let file = req.files;
        
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.webp'];

        if (!file) {
            
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