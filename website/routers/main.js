const express = require('express');

const router = express.Router();

const controller = require("../Controllers/mainControllers");

router.get("/", controller.home);

router.get("/?prod", controller.search);

router.get("/error", controller.error);

module.exports = router;