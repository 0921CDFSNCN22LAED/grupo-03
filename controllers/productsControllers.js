const fs = require("fs");
const path = require("path");

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");  revisar funcionamiento

const productsService = require("../services/products.js");

const { validationResult } = require('express-validator');

const controller = {
    productCart: (req, res) => {
        res.render("productCart",{user:req.session.userLogged});
    },
    armaTuPc: (req, res) => {
        res.render("armaTuPc",{user:req.session.userLogged});
    },
    createProd: (req, res) => {
        res.render("createProd");
    },
    productTotals: (req, res) => {
        res.render("productTotals", { products: productsService.products,user:req.session.userLogged });
    },
    productDetail: (req, res) => {
        const idProduct = req.params.id;
        const product = productsService.products.find((product) => {
            return idProduct == product.id;
        });
        const productShowOffer = productsService.products.filter((prod) => {
            return prod.type == "offer";
        })
        if (product) {
            res.render('productDetail', {
                product: product,
                idProduct: idProduct,
                productShowOffer
            });
        } else {
            res.render("error")
        }
    },
    budget: (req, res) => {

        const prodSearch = {

            ...req.body
        }

        let prodShow = null;

        if (prodSearch != null) {

            prodShow = productsService.products.filter((prod) => {

                return prod.category == prodSearch.category && (prod.precio >= prodSearch.min && prod.precio <= prodSearch.max)
            })
        }

        res.render("cotizaTuPc", { products: prodShow, prodSearch });
    },
    tablet_prod: (req, res) => {

        res.render('tables_prod', {
            products: productsService.products,
        });


    },
    destroy: (req, res) => {
        const id = req.params.id;
        productsService.deleteOne(id);


        res.redirect("/products/tabla-prod");
    },
    storage: (req, res) => {


        const resultValidation = validationResult(req);


        /*
        console.log(resultValidation.errors);
        console.log(req.body);
        console.log(req.file.image1);
        console.log(resultValidation.errors.length);
        */

        if (resultValidation.errors.length > 0) {
            return res.render('createProd', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });

        };
        const image = "/img/products/" + req.file.filename

        console.log("entra aca controller");
        productsService.createOne(req.body, image);

        res.redirect("/products/tabla-prod");


    },
    editProduct: (req, res) => {
        const idProd = req.params.id;
        const prod = productsService.products.find((prod) => {
            return idProd == prod.id;
        });

        if (prod) {
            res.render('editProduct', {
                prod,
                idProd
            });
        } else {
            res.render("error")
        };

    },
    updateProduct: (req, res) => {
        const idProd = req.params.id;
        const prod = productsService.products.find((prod) => {
            return idProd == prod.id;
        });
        const img = (!req.file) ? prod.image1 : req.file.filename;
        const image = "/img/products/" + img;
        console.log(req.file);
        console.log(req.body);
        let prodToUpdate = {
            ...req.body,
            imagen1: image,
        }
        console.log(prodToUpdate.image1);
        productsService.change(req.params.id, prodToUpdate);
        console.log("pase por controller");
        console.log(req.file);
        res.redirect('/products/productDetail/' + idProd);
    }
};
module.exports = controller;