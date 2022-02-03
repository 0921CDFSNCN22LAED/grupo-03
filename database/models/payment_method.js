module.exports = function (sequelize , dataTypes){

    let alias = "payment_method";

    let cols = {
        id:{
            type:dataTypes.INTEGER ,
            primaryKey: true ,
            autoIncrement:true,
            allowNull: false,
        },
        name: {
            type:dataTypes.STRING(10),
            allowNull: false,
        },
 

    }

    let config = {
        tableName:"uspayment_methoders",
        timestamps: false
    }

    let payment_method = sequelize.define(alias, cols, config);

    payment_method.associate = function(models){      

        payment_method.belongsTo(models.carts_buy,{
            as: "payment_method_carts_buy" ,  //revisar todos los "as"
            foreignKey:"idPaymentMethod" ,
        }); 

    }


    return payment_method;
    
}