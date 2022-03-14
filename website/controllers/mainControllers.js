const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");
const { query } = require("express");


//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");  revisar funcionamiento

const productsService = require("../services/products");

const { validationResult } = require('express-validator');

const db = require("../database/models");

const controller = {
    home: (req, res) => {

        const productVisited = db.products.findAll({

            where:{
                idType: 1
            }
        })
        
        const productOffer = db.products.findAll({

            where:{
                idType: 2
            }
        })

        

        Promise.all([productVisited, productOffer])
            .then(function(info){

               

                const visited = info[0];

                

                const offer = info[1];
                 /*
                for(vist of visited){

                    console.log(vist.dataValues);
                }

                */

                const productShowVisited = visited.map(function(v){

                    return v.dataValues;

                });

                
                const productShowOffer = offer.map(function(o){

                    return o.dataValues;

                });

               
                
                res.render("index", { productShowVisited, productShowOffer, user:req.session.userLogged });
                

            })
            
    
    },
    search: async function (req, res) {
        
        const prodSearch = req.query.prod;
        const products = await db.products.findAll({
            where: {
                name: { [Op.like]: "%" + prodSearch + "%" },
            },
        });

        return res.render("productTotals", { products,title:"Producto buscado" });
    },
    error: (req, res) => {
        res.render("error");
    }
}
module.exports = controller;