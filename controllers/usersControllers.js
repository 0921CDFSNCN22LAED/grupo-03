const fs = require("fs");
const path = require("path");

const userService = require("../services/user");

const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const controller = {
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    processRegister: (req, res) => {

        const resultValidation = validationResult(req);

        if(resultValidation.length > 0){

            res.render("register");
        };

        let userInDB = userService.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('register', {
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
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = userService.create(userToCreate);

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
        const user = userService.getData().find((user) => {
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
        const user = userService.getData().find((user) => {
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