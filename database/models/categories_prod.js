module.exports = function (sequelize , dataTypes){

    let alias = "categories_prod";

    let cols = {
        idCategoryProd:{
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
        tableName:"categories_prod",
        timestamps: false
    }

    let categories_prod = sequelize.define(alias, cols, config);

    categories_prod.associate = function(models){   


        categories_prod.belongsTo(models.products,{
            as: "categories_prod_products" ,  //revisar todos los "as"
            foreignKey:"idType" ,
        }); 

    }


    return categories_prod;
    
}