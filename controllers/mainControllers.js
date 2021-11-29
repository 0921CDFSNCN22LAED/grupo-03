const path = require('path');
const fs = require("fs");

const productsFilePath = path.join(__dirname, "../data/products.json");
const productsFileText = fs.readFileSync(productsFilePath, "utf-8");
const products = JSON.parse(productsFileText); //ARRAY de PRODUCTOS

const usersFilePath = path.join(__dirname, "../data/users.json");
const usersFileText = fs.readFileSync(usersFilePath, "utf-8");
const users = JSON.parse(usersFileText); //ARRAY de PRODUCTOS

const controller = {
    home: (req, res) => {
        res.render("index");
    },
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    armaTuPc: (req, res) => {
        res.render("armaTuPc");
    },
    recupero: (req, res) => {
        res.render("recupero");
    },
    history: (req, res) => {
        res.render("history");
    },
    error: (req, res) => {
        res.render("error");
    },
    createUpdateProd: (req, res) => {
        res.render("createUpdateProd");
    },
    productTotals: (req, res) => {
        res.render("productTotals", { products: products });
    },
    productDetail: (req, res) => {
        const idProduct = req.params.id;
        const product = products.find((product) => {
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

        res.render("cotizaTuPc", { products: products });
    }
}

module.exports = controller;