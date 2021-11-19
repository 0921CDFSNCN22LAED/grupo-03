
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
    productDetail: (req, res) => {
        res.render("productDetail");
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

    }
}

module.exports = controller;