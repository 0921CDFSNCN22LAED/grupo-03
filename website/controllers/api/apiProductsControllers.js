const db = require("../../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Sequelize = require('sequelize');
const products = require("../../services/products");
const { response } = require("express");
const res = require("express/lib/response");
const Op = db.Sequelize.Op;

module.exports = {

    listProducts: (req, res) => {
        db.products
            .findAll()
            .then(products => {
                return res.status(200).json({
                    total: products.length,
                    data: products,
                    status: 200
                })
            })
    },

    oneProduct: (req, res) => {
        db.products
            .findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                    data: product,
                    status: 200
                })
            })
    },
    oneProductIMG: (req, res) => {
        db.products
            .findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                    data: product.image,
                    status: 200
                })
            })
    },
    createProduct: (req, res) => {
        db.products
            .create(req.body)
            .then(product => {
                return res.status(200).json({
                    data: product,
                    status: 200,
                    created: 'ok'

                })
            })
    },

    update: function(req, res) {

        const idProd = req.params.id;


        db.products.findByPk(req.params.id)
            .then(prod => {
                console.log(req.body);

                db.products.update({

                    name: req.body.name,
                    description: req.body.desc,
                    size: req.body.size,
                    idCategory: req.body.idCategory,
                    idType: req.body.idType,
                    price: req.body.price,
                    disc: req.body.disc,
                    image: (!req.file) ? prod.image : "/img/products/" + req.file.filename

                }, {
                    where: {
                        id: idProd
                    }
                })

            })
            .then(function() {

                return res.json({

                    status: 200,
                    update: 'ok'

                })
            }).
        catch(function(error) {
            console.log(error);
        })

    },

    destroy: (req, res) => {
        db.products.destroy({
                where: { id: req.params.id }
            }, {
                include: [
                    { association: "products_type" },
                    { association: "products_categories_prod" }
                ],
            })
            .then(response => {
                return res.json(response)
            })
    },

    searchName: (req, res) => {
        db.products
            .findAll({
                where: {
                    name: {
                        [Op.like]: '%' + req.query.keyword + '%' }
                }
            })
            .then(hola => {
                return res.status(200).json(hola);
            })
    },


    searchCategory: (req, res) => {
        db.products.findAll({
                where: {
                    idCategory: {
                        [Op.like]: '%' + req.query.keyword + '%'
                    }
                }
            })
            .then(searchProducts => {
                return res.json(searchProducts);
            })

    },

    allCategory: (req, res) => {

        db.categories_prod.findAll()
            .then(category => {
                return res.json(category);
            })
    },

    listProductsCategory: (req, res) => {
        db.products
            .findAll({
              
                attributes:['id', 'name', 'description', 'idCategory', 'idType', 'price', 'disc', 
                'image','name'],
            include:[
                {
                    model: db.categories_prod, as:'products_categories',
                    attributes: ['name'],
                                           
                },
                {
                    model: db.typeProduct, as:'products_type',
                    attributes: ['name'],
                    
                }
               
               
                ]
            })
            .then(products => {
                return res.status(200).json({
                    total: products.length,
                    data: products,
                    status: 200
                })
            })
    },

    findLastId:(req,res)=>{

        db.products.findOne({
            attributes:[
                [Sequelize.fn('max', Sequelize.col('id')),'maxid'] 
            ]
            
        })
        .then(product => {
            return res.status(200).json({
                total: product.length,
                data: product,
                status: 200
            })
        })
    }




}