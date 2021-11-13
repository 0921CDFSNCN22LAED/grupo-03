const path = require('path');

const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"))
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/login.html"))
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/register.html"))
    },
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/productDetail.html"))
    },
    productCart: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/productCart.html"))
    },
    armaTuPc: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/armaTuPc.html"))
    },
    recupero: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/recupero.html"))
    },
    history: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/history.html"))

    }
}

module.exports = controller;