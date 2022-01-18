const express = require("express");

const router = express.Router();

const controller = require("../Controllers/usersControllers");

const { body } = require("express-validator");

const upload = require('../middlewares/multer_user_middlewares.js');
const guest = require('../middlewares/guest_middleware');
const auth = require('../middlewares/auth_middleware');
const validationUser = require("../middlewares/validate_user_middlewares");

router.get("/login", guest, controller.login);

router.get("/register", guest, controller.register);

router.post("/register", upload.single('avatar'), validationUser, controller.processRegister);

router.get("/recupero", guest, controller.recupero);

router.post("/recupero", validationUser, controller.recover);

router.get("/recup", controller.recup);

router.get("/history", auth, controller.history);

router.get("/allUsers", controller.allUsers);

router.get("/profile", auth, controller.profile)

router.get("/userEdit/:id", controller.userEdit);

router.get("/userDelete/:id", controller.userDelete);

module.exports = router;