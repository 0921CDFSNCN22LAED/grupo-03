const express = require('express');
const path = require('path');

const router = express.Router();

const controller = require("../Controllers/productsControllers");

const upload = require('../middlewares/multer_middlewares.js');

const validations = require('../middlewares/validate_product_middlewares.js');

const admin = require('../middlewares/admin_auth_midleware');

router.get("/productCart", controller.productCart);

router.get("/armaTuPc", controller.armaTuPc);

router.get("/productTotals", controller.productTotals);

router.get("/createProd", controller.createProd);

router.post("/createProd", upload.single("image"), validations, controller.storage);

router.get("/cotizaTuPc", controller.budget);

router.post("/cotizaTuPc", controller.budgetSearch);

router.get("/tabla-prod", admin, controller.tablet_prod);

router.delete("/tabla-prod/:id", admin, controller.destroy);

router.get("/editProduct/:id", admin, controller.editProduct);

router.put("/updateProduct/:id", admin, upload.single("image"), controller.updateProduct);

router.get("/productDetail/:id", controller.productDetail);

module.exports = router;
//upload.fields([{ name:"image1" }, { name:"image2"  }, { name:"image3" }])