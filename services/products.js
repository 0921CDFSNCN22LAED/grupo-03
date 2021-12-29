

const fs = require("fs");
const path = require("path");


const productsFilePath = path.join(__dirname, "../data/products.json");
const productsFileText = fs.readFileSync(productsFilePath, "utf-8");
const products = JSON.parse(productsFileText); //ARRAY de PRODUCTOS

/*
const usersFilePath = path.join(__dirname, "../data/users.json");
const usersFileText = fs.readFileSync(usersFilePath, "utf-8");
const users = JSON.parse(usersFileText); //ARRAY de USUARIOS
*/

  function saveProducts() {
    const text = JSON.stringify(products, null, 4);
    fs.writeFileSync(productsFilePath, text, "utf-8");
  };



  module.exports = {

    createOne(body) {
      const product = {
        id: Date.now(), 
        ...body,
      };
  
      products.push(product);
  
      saveProducts();
    },

    products,

    

      deleteOne(id) {
      const index = products.findIndex((prod) => prod.id == id);
      products.splice(index, 1);
      saveProducts();
    }

  };



  

