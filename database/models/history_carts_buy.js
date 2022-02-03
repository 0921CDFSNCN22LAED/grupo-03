module.exports = function (sequelize , dataTypes){

    let alias = "carts_buy";

    let cols = {
        idCartsBuy:{
            type:dataTypes.INTEGER ,
            primaryKey: true ,
            autoIncrement:true,
            allowNull: false,
        },
        idUsers:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        totalPrice:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        dateBuy:{
  // tipo de dato "DATE" cual poner?            type:dataTypes.DATE ,
            allowNull: false,
        },
        idPaymentMethod:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },

        
    }

    let config = {
        tableName:"carts_buy",
        timestamps: false
    }

    let carts_buy = sequelize.define(alias, cols, config);

    carts_buy.associate = function(models){

        carts_buy.belongsToMany(models.products,{
            as: "carts_buy",
            through:"carts_products",
            foreignKey: "idProducts",
            otherKey:"idCartsBuy" ,
            timestamps: false,
        });

        carts_buy.hasMany(models.carts_products,{
                as: "carts_buy_carts_products" ,  //revisar todos los "as"
                foreignKey:"idCartsBuy" ,
        }); 

        carts_buy.hasMany(models.payment_method,{
            as: "carts_buy_payment_method" ,  //revisar todos los "as"
            foreignKey:"id" ,
    }); 
        carts_buy.hasMany(models.users,{
            as: "carts_buy_users" ,  //revisar todos los "as"
            foreignKey:"id" ,
    }); 



    }   

    return carts_buy;
    
}
