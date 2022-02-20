const fs = require("fs");
const path = require("path");

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");  revisar funcionamiento


const { validationResult } = require('express-validator');
const db = require("../database/models");

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

        db.products.findAll()
        .then(function(products){
           // console.log(products);
           return res.render("productTotals", { products:products,user:req.session.userLogged });
        })

        //res.render("productTotals", { products: productsService.products,user:req.session.userLogged });
    },


     productDetail: (req, res) => {
        db.products.findByPk(req.params.id,{ 
            include: [           
                { association: "products_type" },
                { association: "products_categories_prod"}
            ],   
        })
        .then(function(product){
            console.log(product);
           return res.render("productDetail", {   
            
            product: product,

            });
        })
    },

    //     const idProduct = req.params.id;
    //     const product = productsService.products.find((product) => {
    //         return idProduct == product.id;
    //     });
    //     const productShowOffer = productsService.products.filter((prod) => {
    //         return prod.type == "offer";
    //     })
    //     if (product) {
    //         res.render('productDetail', {
    //             product: product,
    //             idProduct: idProduct,
    //             productShowOffer
    //         });
    //     } else {
    //         res.render("error")
    //     }
   


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

        db.products.findAll()
        .then(function(products){
           // console.log(products);
           return res.render("tables_prod", { products:products});
        })



        // res.render('tables_prod', {
        //     products: productsService.products,
        // });
    },

    destroy: (req, res) => {
        db.products.destroy({ 
            where:{
                id:req.params.id
            }
        })
        // const id = req.params.id;
        // productsService.deleteOne(id);

        res.redirect("/products/tabla-prod");
    },

//CREATE
    storage: function(req, res) {

        
        
        const category =  db.categories_prod.findOne({
            where:{
                    name: "gaming" 
            }          
        })
            
        const type =  db.typeProduct.findOne({
            where:{
                    name: req.body.idType 
            }          
        })
        Promise.all([ category , type])
        .then(function(info){

            console.log(req.file.filename);
            
            db.products.create ({
             
                name:req.body.name,
                description:req.body.desc,
                size:req.body.size,
                idCategory: info[0].dataValues.id,
                idType: info[1].dataValues.id,
                price:req.body.price,
                disc:req.body.disc,
                image:req.file.filename
    
            })
        })
        .then(function(){
            res.redirect("/products/tabla-prod");
        })  
        .catch(function(error){

            console.log(error);
        }) 


        // const resultValidation = validationResult(req);

        // if (resultValidation.errors.length > 0) {
        //     return res.render('createProd', {
        //         errors: resultValidation.mapped(),
        //         oldData: req.body
        //     });

        // };
        // const image = "/img/products/" + req.file.filename

        // productsService.createOne(req.body, image);

        // res.redirect("/products/tabla-prod");


    },
//
//42min


    editProduct: async function(req, res) {

        const idProd = req.params.id;

        const prod = await db.products.findByPk(idProd);
        if (prod) {
            res.render('editProduct', {
                 prod,
                 idProd
            });
        } else {
            res.render("error")
        };
    },




    updateProduct: function(req, res) {

     const idProd = req.params.id;
        
        const category =  db.categories_prod.findOne({
            where:{
                    name: "gaming" 
            }          
        })
            
        const type =  db.typeProduct.findOne({
            where:{
                    name: req.body.idType 
            }          
        })
        Promise.all([ category , type])
        .then(function(info){
    

            db.products.update ({
             
                name:req.body.name,
                description:req.body.desc,
                size:req.body.size,
                idCategory: info[0].dataValues.id,
                idType: info[1].dataValues.id,
                price:req.body.price,
                disc:req.body.disc,
                image:req.file.filename

            } , {
                where: {
                    id: idProd
                }
            })

        })
        .then(function(){
            res.redirect("/products/tabla-prod");
        })  





}
}
//     updateProduct: (req, res) => {
//         const idProd = req.params.id;
//         const prod = productsService.products.find((prod) => {
//             return idProd == prod.id;
//         });
//         const img = (!req.file) ? prod.image1 : req.file.filename;
//         const image = "/img/products/" + img;
//         console.log(req.file);
//         console.log(req.body);
//         let prodToUpdate = {
//             ...req.body,
//             imagen1: image,
//         }
//         console.log(prodToUpdate.image1);
//         productsService.change(req.params.id, prodToUpdate);
//         console.log("pase por controller");
//         console.log(req.file);
//         res.redirect('/products/productDetail/' + idProd);
//     }
// };
module.exports = controller;