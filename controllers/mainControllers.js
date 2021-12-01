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
    allUsers: (req, res) => {
        res.render("allUsers", { users: users });
    },
    userEdit: (req, res) => {
        const idUser = req.params.id;
        const user = users.find((user) => {
            return idUser == user.id;
        });
        if (user) {
            res.render('userEdit', {
                user,
                idUser,
            });
        } else {
            res.render("error")
        }
    },
    userDelete: (req, res) => {
        const idUser = req.params.id;
        const user = users.find((user) => {
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

       const prodSearch = {

            ...req.body
        }

        let prodShow = null;

        if (prodSearch != null) {

            prodShow = products.filter((prod) => {

                return prod.category == prodSearch.category && (prod.precio >= prodSearch.min && prod.precio <= prodSearch.max)
            })
        }




        res.render("cotizaTuPc", { products: prodShow, prodSearch });
    },

}

module.exports = controller;