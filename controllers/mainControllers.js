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

        const productShowOffer = productsService.products.filter((prod) => {
            return prod.type == "offer";
        })

        res.render("index", { productShowVisited, productShowOffer });
    },
    error: (req, res) => {
        res.render("error");
    }
}
module.exports = controller;