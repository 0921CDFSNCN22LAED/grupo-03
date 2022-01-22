const fs = require("fs");
const path = require("path");

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");  revisar funcionamiento

const productsService = require("../services/products");

const { validationResult } = require('express-validator');

const controller = {
    home: (req, res) => {


        const productShowVisited = productsService.products.filter((prod) => {
                return prod.type == "visited";
            })
            //console.log(productShowVisited);
        const productShowOffer = productsService.products.filter((prod) => {
                return prod.type == "offer";
            })
            //console.log(productShowOffer);
        res.render("index", { productShowVisited, productShowOffer, user:req.session.userLogged });
    },
    error: (req, res) => {
        res.render("error");
    }
}
module.exports = controller;