const express = require('express');
const path = require('path');
const router = express.Router();


const controller = require("../../controllers/api/apiProductsControllers");
const upload = require('../../middlewares/multer_middlewares.js');
const validations = require('../../middlewares/validate_product_middlewares');

//endpoints

router.get('/', controller.listProducts);
router.get('/:id', controller.oneProduct);
router.post('/', controller.createProduct);
router.delete('/id', controller.destroy);






module.exports = router;


