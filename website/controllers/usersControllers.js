const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const res = require("express/lib/response");

const db = require("../database/models");
const { Console } = require("console");
const { brotliDecompress } = require("zlib");

const controller = {
    login: function(req, res) {

        res.render("login");
    },
    loginProcess: function(req, res) {

        const resultValidation = validationResult(req);

        db.users.findOne({
                where: {
                    email: req.body.email,
                }
            })
            .then(function(userToLogin) {

                

                if (resultValidation.errors.email || resultValidation.errors.password || !userToLogin) {
                    return res.render("login", {

                        errors: {

                            email: {
                                msg: "Las credenciales son invalidas"
                            }
                        }
                    });
                };

                if (userToLogin) {


                    let comparePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
                    if (comparePassword) {


                        userToLogin.password = "";



                        req.session.userLogged = userToLogin;

                         //console.log("userToLogin");
                         console.log(req.session.userLogged);
                        
                        return res.redirect("/");
                    } else {

                        return res.render("login", {

                            errors: {

                                email: {
                                    msg: "Las credenciales son invalidas"
                                }
                            }
                        });

                    }

                }

            })
            .catch(function(err) {
                console.log("El error es: " + err);
            });

    },
    register: function(req, res) {
        res.render("register");
    },
    processRegister: function(req, res) {

        const resultValidation = validationResult(req);

       

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });

        }


        db.users.findOne({
                where: {
                    email: req.body.email,
                }
            })
            .then(function(userInDB) {

                if (userInDB) {
                    return res.render('register', {
                        errors: {
                            email: {
                                msg: 'Este email ya est?? registrado'
                            }
                        },
                        oldData: req.body
                    });
                }

            })
            .then(function() {

                let passEncrypted = bcrypt.hashSync(req.body.password, 10);

               

                db.users.create({

                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: passEncrypted,
                    idCategory: 1,
                    phone: req.body.phone,
                    adress: req.body.adress,
                    location: req.body.location,
                    state: req.body.state,
                    avatarIMG: "/img/users/" + req.file.filename

                });

                return res.redirect('/users/login');

            });
        //image = "/img/users/" + req.file.filename;   
    },
    recupero: (req, res) => {

        res.render("recupero");
    },
    recover: async function(req, res) {

        const resultValidation = validationResult(req);


        if (resultValidation.errors.length > 0) {
            return res.render('recupero', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        const mail = await db.users.findAll({
            where: {
                email: req.body.email,
            }
        });

        if (!mail) {
            return res.render('recupero', {
                errors: {
                    email: {
                        msg: 'Este email no est?? registrado'
                    }
                },
                oldData: req.body
            });
        } else {

            return res.redirect('/users/recup');
        }

    },

    recup: function(req, res) {

        res.render("recup");
    },

    history: function(req, res) {

        res.render("history");
    },

    allUsers: async function(req, res) {

        const usersAll = await db.users.findAll();
        res.render("allUsers", { users: usersAll });
    },
    userEdit: async function(req, res) {

        const idUser = req.params.id;

        const user = await db.users.findByPk(idUser);
        if (user) {
            res.render('userEdit', {
                user,
                idUser,
            });
        } else {
            res.render("error")
        }
    },
    updateUser: function(req, res) {

        const idUser = req.params.id;

        console.log(req.body.avatarIMG);
        console.log(req.file);

    
        db.users.findByPk(idUser)
            .then(function(user) {

                db.users.update({

                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    idCategory: 1,
                    adress: req.body.adress,
                    location: req.body.location,
                    state: req.body.state,
                    avatarIMG: req.file === undefined ? user.avatarIMG : "/img/users/"+req.file.filename

                }, {
                    where: {
                        id: idUser
                    }
                })
                



                return res.redirect('/users/profile/:id');

            });

    },
    userDelete: async function(req, res) {
        const idUserDestroy = req.params.id;

        const user = await db.users.findByPk(idUser);

        db.user.destroy({
            where: {
                idUser: idUserDestroy
            }
        })

     
    },

    profile: function(req, res) {

        res.render("profile", { user: req.session.userLogged });
    },

    logout: function(req, res) {

        req.session.destroy();
        return res.redirect("/");

    }
}


module.exports = controller;