const express = require('express');

const router = express.Router();

const controller = require("../Controllers/mainControllers");

router.get("/", controller.home);

router.get("/login", controller.login);

router.get("/register", controller.register);

router.get("/productDetail", controller.productDetail);

router.get("/productCart", controller.productCart);

router.get("/armaTuPc", controller.armaTuPc);

router.get("/recupero", controller.recupero);

router.get("/history", controller.history);

module.exports = router;