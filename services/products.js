const fs = require("fs");
const path = require("path");


const productsFilePath = path.join(__dirname, "../data/products.json");
const productsFileText = fs.readFileSync(productsFilePath, "utf-8");
const products = JSON.parse(productsFileText); //ARRAY de PRODUCTOS




function saveProducts() {
    const text = JSON.stringify(products, null, 4);
    fs.writeFileSync(productsFilePath, text, "utf-8");
};

module.exports = {

    createOne(body, file) {

        const product = {
            id: Date.now(),
            ...body,
            imagen1: file
        };

        products.push(product);

        saveProducts();
    },

    products,

    getData() {
        return products;
    },

    findAll: function() {
        return this.getData()
    },

    deleteOne(id) {
        const index = products.findIndex((prod) => prod.id == id);
        products.splice(index, 1);
        saveProducts();
    },
    change: function(id, prodChange) {
        let allproducts = this.findAll();
        console.log("pase por services");
        console.log(id);
        console.log(prodChange);
        const index = allproducts.findIndex((producto) => {
            return producto.id == id;
        });

        const productupdate = {
            id: allproducts[index].id,
            image: allproducts[index].image,
            ...prodChange,
        };

        allproducts[index] = productupdate;

        saveProducts();
    }

};