const fs = require("fs");
const path = require("path");

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");  revisar funcionamiento


const { validationResult } = require('express-validator');
const db = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op

const controller = {



    productCart: (req, res) => {
        res.render("productCart", { user: req.session.userLogged });
    },
    armaTuPc: (req, res) => {
        res.render("armaTuPc", { user: req.session.userLogged });
    },
    createProd: (req, res) => {

        const category =  db.categories_prod.findAll()
            
        const type =  db.typeProduct.findAll()
            

        Promise.all([category, type])

            .then(function(info) {

                const cat = info[0];

                const typ = info[1];

                const allCategory = cat.map(function(c){

                    return c.dataValues;

                });

                const allType = typ.map(function(t){

                    return t.dataValues;

                });

                

                res.render('createProd',{categorys : allCategory,types:allType});

            });
        
    },

    productTotals: (req, res) => {

        db.products.findAll()
            .then(function(products) {

                return res.render("productTotals", { products: products, user: req.session.userLogged , title:"Nuestros Productos"});
            })


    },


    productDetail: (req, res) => {
        db.products.findByPk(req.params.id, {
                include: [
                    { association: "products_type" },
                    { association: "products_categories" }
                ],
            })
            .then(function(product) {
                console.log(product);
                return res.render("productDetail", {

                    product: product,

                });
            })
    },

    budget: (req, res) => {

        res.render("cotizaTuPc",{user:req.session.userLogged});

    },

    budgetSearch: async function(req, res) {

        const prodSearchCategory = req.body.category;
        const min = req.body.min;
        const max = req.body.max;

        if (prodSearchCategory != "category") {


            const category = await db.categories_prod.findOne({
                where: {
                    name: prodSearchCategory
                }
            })

            const products = await db.products.findAll({

                where: {
                    idCategory: category.id
                }
            })


            return await res.render("cotizaTuPc", { products });

        }

        if (max && min && prodSearchCategory == "category") {

            const products = await db.products.findAll({

                where: {
                    price: {
                        [Op.and]: {
                            [Op.gte]: min,
                            [Op.lte]: max
                        }
                    }

                }
            })


            return await res.render("cotizaTuPc", { products });


        }


    },


    tablet_prod: (req, res) => {

        db.products.findAll()
            .then(function(products) {
                
                return res.render("tables_prod", { products: products });
            })
        
    },

    destroy: (req, res) => {
        db.products.destroy({
            where: {
                id: req.params.id
            }
        })


        res.redirect("/products/tabla-prod");
    },


    storage: function(req, res) {

        const resultValidation = validationResult(req);

        console.log("resultValidation");
        console.log(resultValidation)
        
        if (resultValidation.errors.length > 0) {

            const category =  db.categories_prod.findAll()
            
            const type =  db.typeProduct.findAll()

            Promise.all([category, type])

            .then(function(info) {

                const cat = info[0];

                const typ = info[1];

                const allCategory = cat.map(function(c){

                    return c.dataValues;

                });

                const allType = typ.map(function(t){

                    return t.dataValues;

                });

                return res.render('createProd', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    categorys : allCategory,
                    types:allType
                });


            });


            

        }
        
        const category = db.categories_prod.findOne({
            where: {
                name: req.body.idCategory
            }
        })

        const type = db.typeProduct.findOne({
            where: {
                name: req.body.idType
            }
        })
        Promise.all([category, type])
            .then(function(info) {

                db.products.create({

                    name: req.body.name,
                    description: req.body.desc,
                    size: req.body.size,
                    idCategory: info[0].dataValues.id,
                    idType: info[1].dataValues.id,
                    price: req.body.price,
                    disc: req.body.disc,
                    image: "/img/products/" + req.file.filename

                })
            })
            .then(function() {
                res.redirect("/products/tabla-prod");
            })
            .catch(function(error) {

                console.log(error);
            })


    },

    editProduct: async function(req, res) {

        const idProd = req.params.id;

        const category =  db.categories_prod.findAll();
            
        const type =  db.typeProduct.findAll();

        const product = await db.products.findByPk(idProd);
            

        Promise.all([category, type,product])

            .then(function(info) {

                const cat = info[0];

                const typ = info[1];

                const prod = info[2]

                const allCategory = cat.map(function(c){

                    return c.dataValues;

                });

                const allType = typ.map(function(t){

                    return t.dataValues;

                });

                if (prod) {
                    res.render('editProduct', {
                        prod,
                        idProd,
                        categorys : allCategory,
                        types:allType
                    });
                } else {
                    res.render("error")
                };
                

            });

        
        
    },

    updateProduct: function(req, res) {

        const idProd = req.params.id;

        const prod = db.products.findByPk(idProd);


        const category = db.categories_prod.findOne({
            where: {
                name: req.body.category
            }
        })

        const type = db.typeProduct.findOne({
            where: {
                name: req.body.type
            }
        })

        Promise.all([category, type, prod])
            .then(function(info) {

                db.products.update({

                    name: req.body.name,
                    description: req.body.desc,
                    size: req.body.size,
                    idCategory: info[0].dataValues.id,
                    idType: info[1].dataValues.id,
                    price: req.body.price,
                    disc: req.body.disc,
                    image: (!req.file) ? info[2].image : "/img/products/" + req.file.filename

                }, {
                    where: {
                        id: idProd
                    }
                })

            })
            .then(function() {
                return res.redirect("/products/tabla-prod");
            })

    },
    searchAll:(req,res)=>{

        res.render("productTotals");

    }

}
module.exports = controller;