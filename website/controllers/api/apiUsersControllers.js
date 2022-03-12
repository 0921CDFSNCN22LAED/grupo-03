const db = require("../../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Sequelize = require('sequelize');
const Op = db.Sequelize.Op;

module.exports = {

    listUsers: (req, res) => {
        db.users.findAll()
            .then(allUsers => {
                return res.json({
                    total: allUsers.length,
                    data: allUsers,
                    status: 200
                })
            })

    },
    oneUser: (req, res) => {
        const idUser = req.params.id;
        db.users.findByPk(idUser)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200
                })
            })
    },
    oneUserImg: (req, res) => {
        const idUser = req.params.id;
        db.users.findByPk(idUser)
            .then(user => {
                return res.status(200).json({
                    data: user.avatarIMG,
                    status: 200
                })
            })
    },

    store: (req, res) => {
        console.log(req.body);
        const passEncrypted = bcrypt.hashSync(req.body.password, 10);
        console.log(passEncrypted);
        const image = "/img/users/" + req.body.avatarIMG
        db.users.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: passEncrypted,
                idCategory: req.body.idCategory,
                avatarIMG: image,
                phone: req.body.phone,
                adress: req.body.adress,
                location: req.body.location,
                state: req.body.state

            })
            .then(user => {
                return res.json({
                    data: user,
                    status: 200,
                    create: 'ok'
                })
            })
    },
    delete: (req, res) => {
        db.users.destroy({
                where: { id: req.params.id }
            })
            .then(response => {
                return res.json(response)
            })
    },
    searchmail: (req, res) => {
        db.users.findAll({
                where: {
                    email: {
                        [Op.like]: '%' + req.query.keyword + '%'
                    }
                }
            })
            .then(searchUsers => {
                return res.json(searchUsers);
            })
    },
    searchlastname: (req, res) => {
        db.users.findAll({
                where: {
                    lastName: {
                        [Op.like]: '%' + req.query.keyword + '%'
                    }
                }
            })
            .then(searchUsers => {
                return res.json(searchUsers);
            })

    },
    update: function(req, res) {
        db.users.findByPk(req.params.id)
            .then(user => {

                db.users.update({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        idCategory: req.body.idCategory,
                        adress: req.body.adress,
                        location: req.body.location,
                        state: req.body.state,
                        avatarIMG: req.file === undefined ? user.avatarIMG : "/img/users/" + req.file.filename
                    }, {
                        where: { id: req.params.id }
                    })
                    .then(response => {
                        return res.json({ response })
                    })
            });

    },
    findLastId:(req,res)=>{

        db.users.findOne({
            attributes:[
                [Sequelize.fn('max', Sequelize.col('id')),'maxid'] 
            ]
            
        })
        .then(user => {
            
            let id = user.dataValues.maxid;
            
            db.users.findByPk(id)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200
                })
            })
            
        })
        
    },
}