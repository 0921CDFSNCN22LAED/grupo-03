const express = require("express");

const router = express.Router();

const controller = require("../Controllers/usersControllers");

const upload = require('../middlewares/multer_middlewares.js');

router.get("/login", controller.login);

router.get("/register", controller.register);

router.post("/register", uploadFile.single('image'), usersControllers.processRegister);

router.get("/recupero", controller.recupero);

router.get("/history", controller.history);

router.get("/allUsers", controller.allUsers);

router.get("/profile", controller.profile)

router.get("/userEdit/:id", controller.userEdit);

router.get("/userDelete/:id", controller.userDelete);

module.exports = router;