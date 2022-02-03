module.exports = function (sequelize , dataTypes){

    let alias = "carts_products";

    let cols = {
        idCartsProducts:{
            type:dataTypes.INTEGER ,
            primaryKey: true ,
            autoIncrement:true,
            allowNull: false,
        },
        idCartsBuy:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        idProducts:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        quantity:{
            type:dataTypes.INTEGER ,
        },
        price:{
            type:dataTypes.INTEGER ,
        },

        
    }

    let config = {
        tableName:"carts_products",
        timestamps: false
    }

    let carts_products = sequelize.define(alias, cols, config);

    carts_products.associate = function(models){

        carts_products.belongsTo(models.carts_buy,{
            as: "carts_products_carts_buy" ,  //revisar todos los "as"
            foreignKey:"idCartsBuy" ,
        });

        carts_products.belongsTo(models.products,{
                as: "carts_products_products" ,  //revisar todos los "as"
                foreignKey:"id" ,
        });
     }
    return carts_products;
    
}
