const express = require("express");

const router = express.Router();

const controller = require("../../Controllers/api/apiUsersControllers");

const upload = require('../../middlewares/multer_user_middlewares.js');

const validationUser = require("../../middlewares/validate_user_middlewares");

router.get("/", controller.listUsers);

router.get("/searchmail", controller.searchmail);

router.get("/searchlastname", controller.searchlastname);

router.get("/:id", controller.oneUser);

router.put("/update/:id", upload.single("avatarIMG"), controller.update);

router.post("/", upload.single("avatarIMG"), validationUser, controller.store);

router.delete("/:id", controller.delete);

module.exports = router;