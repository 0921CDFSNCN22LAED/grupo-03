const express = require('express');

const router = express.Router();

const controller = require("../Controllers/mainControllers");

router.get("/", controller.home);

router.get("/login", controller.login);

router.get("/register", controller.register);

router.get("/productDetail/:id", controller.productDetail);

router.get("/productCart", controller.productCart);

router.get("/armaTuPc", controller.armaTuPc);

router.get("/recupero", controller.recupero);

router.get("/history", controller.history);

router.get("/productTotals", controller.productTotals);

router.get("/error", controller.error);

router.get("/createUpdateProd", controller.createUpdateProd);

router.get("/allUsers", controller.allUsers);

router.get("/userEdit/:id", controller.userEdit);

router.get("/userDelete/:id", controller.userDelete);

router.get("/cotizaTuPc", controller.budget);

router.post("/cotizaTuPc", controller.budget);

module.exports = router;