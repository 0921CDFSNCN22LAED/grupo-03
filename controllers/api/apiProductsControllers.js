const db = require("../../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Sequelize = require('sequelize');
const products = require("../../services/products");
const { response } = require("express");
const Op = db.Sequelize.Op;

module.exports = {

    listProducts:(req,res)=>{
        db.products
        .findAll()
        .then(products=>{
          return res.status(200).json({
              total:products.length,
              data: products,
              status:200
          })
        })
    },

    oneProduct:(req,res)=>{
        db.products
        .findByPk(req.params.id)
        .then(product=>{
          return res.status(200).json({
              data: product,
              status:200
          })
        })
    },

    createProduct:(req,res)=>{
        db.products
        .create(req.body)
        .then(product=>{
          return res.status(200).json({
              data: product,
              status:200,
              created:'ok'

          })
        })
    },

    destroy: (req, res) => {
        db.products.destroy({
                where: { 
                    id: req.params.id 
                }
            })
            .then(response => {
                return res.json(response)
            })
    },

}



 