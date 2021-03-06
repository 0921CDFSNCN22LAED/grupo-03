module.exports = function (sequelize , dataTypes){

    let alias = "categories_prod";

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
        tableName:"categories_prod",
        timestamps: false
    }

    let categories_prod = sequelize.define(alias, cols, config);

    categories_prod.associate = function(models){   

        categories_prod.hasMany(models.products,{
            as: "categories_prod_products" ,  
            foreignKey:"idCategory" ,
        }); 

    }


    return categories_prod;
    
}