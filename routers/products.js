const express = require('express');
const path = require('path');

const router = express.Router();

const controller = require("../Controllers/productsControllers");

const upload = require('../middlewares/multer_middlewares.js');

const validations = require('../middlewares/validate_product_middlewares.js');

//upload.fields([{ name:"image1" }, { name:"image2"  }, { name:"image3" }])

router.get("/productCart", controller.productCart);

router.get("/armaTuPc", controller.armaTuPc);

router.get("/productTotals", controller.productTotals);

router.get("/createProd", controller.createProd);

router.post("/createProd", upload.single("image1"), validations, controller.storage);

router.get("/cotizaTuPc", controller.budget);

router.post("/cotizaTuPc", controller.budget);

router.get("/tabla-prod", controller.tablet_prod);

router.delete("/tabla-prod/:id", controller.destroy);

router.get("/editProduct/:id", controller.editProduct);

router.put("/updateProduct/:id", upload.single("image1"), controller.updateProduct);

router.get("/productDetail/:id", controller.productDetail);

module.exports = router;