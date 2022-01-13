const express = require("express");

const router = express.Router();

const controller = require("../Controllers/usersControllers");

const upload = require('../middlewares/multer_user_middlewares.js');

const { body } = require("express-validator");

const validationUser = require("../middlewares/validate_user_middlewares");

router.get("/login", controller.login);

router.get("/register", controller.register);

router.post("/register", upload.single('avatar'), validationUser, controller.processRegister);

router.get("/recupero", controller.recupero);

router.post("/recupero", validationUser, controller.recover);

router.get("/recup", controller.recup);

router.get("/history", controller.history);

router.get("/allUsers", controller.allUsers);

router.get("/profile", controller.profile)

router.get("/userEdit/:id", controller.userEdit);

router.get("/userDelete/:id", controller.userDelete);

module.exports = router;