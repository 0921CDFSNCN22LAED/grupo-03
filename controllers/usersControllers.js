const fs = require("fs");
const path = require("path");

//const userService = require("../services/user");

const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const res = require("express/lib/response");

const db = require("../database/models");
const { Console } = require("console");

const controller = {
    login: function(req, res) {
    
        res.render("login");
    },
    loginProcess:(req,res)=>{

        const resultValidation = validationResult(req);

         db.users.findOne({
            where: {
              email: req.body.email,
            }
          })
          .then(function(userToLogin){

            if(resultValidation.errors.email || resultValidation.errors.password || !userToLogin){
                return res.render("login",{
    
                    errors:{
        
                        email:{
                            msg: "Las credenciales son invalidas"
                        }
                    }
                });
              };

            if(userToLogin){

                
                    //let comparePassword = bcrypt.compareSync(req.body.password,userToLogin.password);
                    
                    if(req.body.password == userToLogin.password){
      
                        delete userToLogin.password;
                        
      
                        req.session.userLogged = userToLogin;
                        
                        return res.redirect("/");
                    }else{

                        return res.render("login",{
    
                            errors:{
                
                                email:{
                                    msg: "Las credenciales son invalidas"
                                }
                            }
                        });

                    }
                    
                  }
                


          })
          .catch(function (err) {
            console.log("El error es: " + err);
          });

  },
    register: function(req, res) {
        res.render("register");
    },
    processRegister: async function(req,res) {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });

        }  

        const userInDB = await db.users.findAll({
            where: {
              email: req.body.email,
            }
          });
          await function(userInDB){

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
          };
        
        
    

        //image = "/img/users/" + req.file.filename;

        await db.users.create({
            idUser: this.generateId(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            idCategory: 1,
            idAdress: 1,
            avatarIMG: req.file.filename 

        });

        return res.redirect('/users/login');
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
                        msg: 'Este email no está registrado'
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
    updateUser: function(req, res){


        //const idUser = parseInt(req.params.id);

        const idUser = req.params.id;
        
        db.users.findByPk(idUser)
        .then(function(user){

            db.users.update({
            
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                idCategory: 1,
                idAdress: 1,
                avatarIMG: (!req.file) ? user.avatar : req.file.filename
    
            },{
                where:{
                    id: idUser
                }
            });

            

            return res.redirect('/users/profile/:id');

        });

 
        /*
        const img = (!req.file) ? user.avatar : req.file.filename;n
        const image = "/img/users/" + img;
        
        let userToUpdate = {
            ...req.body,
            avatar: image,
        }

        userService.change(req.params.id, userToUpdate);
        */
    },
    userDelete: async function(req, res) {
        const idUserDestroy = req.params.id;

        const user = await db.users.findByPk(idUser);

        db.user.destroy({
            where:{
                idUser: idUserDestroy
            }
        })

        req.session.destroy();
        res.redirect("/users/login");
        /*
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
        */
    },

    profile: function(req, res) {

        res.render("profile",{user:req.session.userLogged});
    },

    logout:function(req,res){

        req.session.destroy();
        return res.redirect("/");

    }
}


module.exports = controller;