const express = require('express');

const router = express.Router();

const controller = require("../Controllers/mainControllers");

const upload = require('../middlewares/multer_middlewares.js');

const { body } = require("express-validator");

const validations = [

    body("email").notEmpty(),
    body("password").notEmpty(),
    body("repassword").notEmpty(),
    body("name").notEmpty(),
    body("lastName").notEmpty(),
    body("phone").notEmpty(),
    body("adress").notEmpty(),
    


];

router.get("/", controller.home);

router.get("/login", controller.login);

router.get("/register", controller.register);

router.post("/register",controller.storageRegister);

router.get("/productDetail/:id", controller.productDetail);

router.get("/productCart", controller.productCart);

router.get("/armaTuPc", controller.armaTuPc);

router.get("/recupero", controller.recupero);

router.get("/history", controller.history);

router.get("/productTotals", controller.productTotals);

router.get("/error", controller.error);

router.get("/createProd", controller.createProd);

router.post("/createProd", controller.storage)

router.get("/allUsers", controller.allUsers);

router.get("/userEdit/:id", controller.userEdit);

router.get("/userDelete/:id", controller.userDelete);

router.get("/cotizaTuPc", controller.budget);

router.post("/cotizaTuPc", controller.budget);

router.get("/tabla-prod", controller.tablet_prod);

router.delete("/tabla-prod/:id", controller.destroy);

router.get("/editProduct/:id", controller.editProduct);

router.put("/updateProduct/:id", upload.fields([{ name: "image1" }, { name: "image2" }, { name: "image3" }]), controller.updateProduct);

router.get("/profile",controller.profile)

module.exports = router;