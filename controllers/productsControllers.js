const fs = require("fs");
const path = require("path");

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");  revisar funcionamiento

const productsService = require("../services/products.js");

const { validationResult } = require('express-validator');

const controller = {
    productCart: (req, res) => {
        res.render("productCart");
    },
    armaTuPc: (req, res) => {
        res.render("armaTuPc");
    },
    createProd: (req, res) => {
        res.render("createProd");
    },
    productTotals: (req, res) => {
        res.render("productTotals", { products: productsService.products });
    },
    productDetail: (req, res) => {
        const idProduct = req.params.id;
        const product = productsService.products.find((product) => {
            return idProduct == product.id;
        });
        if (product) {
            res.render('productDetail', {
                product: product,
                idProduct: idProduct,
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
        
        console.log(resultValidation.errors.length);
        /*
        console.log(resultValidation.errors);
        console.log(req.body);
        console.log(req.files);
        */  
       
        if (resultValidation.errors.length > 0) {
            return res.render('createProd', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });

        };
        
        

            console.log("entra aca controller");
            productsService.createOne(req.body,req.files);
            // const prodJson = JSON.stringify(productsService.products, null, 4);

            // fs.writeFileSync(productsService.productsFilePath, prodJson, "utf-8");

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
        //console.log(req);
        console.log(req.body);
        let prodToUpdate = {
            ...req.body
        }
        console.log(prodToUpdate);
        if (req.files) {

            if (req.files.image1) {
                prodToUpdate.image1 = req.files.image1.filename
            } else {
                prodToUpdate.image1 = prod.image1
            };
            if (req.files.image2) {
                prodToUpdate.image2 = req.files.image2.filename
            } else {
                prodToUpdate.image2 = prod.image2
            };
            if (req.files.image3) {
                prodToUpdate.image3 = req.files.image3.filename
            } else {
                prodToUpdate.image3 = prod.image1
            }

            productsService.products.push(prodToUpdate);
            console.log(productsService.products[1]);
            productsService.saveProducts;

            res.redirect('/products/productDetail/' + idProd);
        }
    },

}

module.exports = controller;