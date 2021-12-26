const fs = require("fs");
const path = require("path");

const productsService = require("../services/user");

const uploadFile = require("../middlewares/multer_middlewares");

const { validationResult } = require("express-validator");

const controller = {
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    processRegister: (req, res) => {

        let userInDB = User.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('userRegisterForm', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('/users/login');
    },
    recupero: (req, res) => {
        res.render("recupero");
    },
    history: (req, res) => {
        res.render("history");
    },

    allUsers: (req, res) => {
        res.render("allUsers", { users: productsService.users });
    },
    userEdit: (req, res) => {
        const idUser = req.params.id;
        const user = productsService.users.find((user) => {
            return idUser == user.id;
        });
        if (user) {
            res.render('userEdit', {
                user,
                idUser,
            });
        } else {
            res.render("error")
        }
    },
    userDelete: (req, res) => {
        const idUser = req.params.id;
        const user = productsService.users.find((user) => {
            return idUser == user.id;
        });
        if (user) {
            res.render('userDelete', {
                user,
                idUser,
            });
        } else {
            res.render("error")
        }
    },

    profile: (req, res) => {

        res.render("profile");
    }
}


module.exports = controller;