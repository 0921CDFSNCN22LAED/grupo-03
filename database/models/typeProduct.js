module.exports = function (sequelize , dataTypes){

    let alias = "typeProduct";

    let cols = {
        id:{
            type:dataTypes.INTEGER ,
            primaryKey: true ,
            autoIncrement:true,
            allowNull: true,
        },
        name: {
            type:dataTypes.STRING(10),
            allowNull: false,
        },
        
    }

    let config = {
        tableName:"typeProduct",
        timestamps: false
    }

    let typeProduct = sequelize.define(alias, cols, config);

    typeProduct.associate = function(models){      

        typeProduct.hasMany(models.products,{
            as: "type_products" ,  
            foreignKey:"idType" ,
        }); 

    }

    return typeProduct;
    
}