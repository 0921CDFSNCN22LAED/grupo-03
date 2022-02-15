module.exports = function (sequelize , dataTypes){

    let alias = "products";

    let cols = {
        id:{
            type:dataTypes.INTEGER ,
            primaryKey: true ,
            autoIncrement:true,
            allowNull: true,
        },
        name: {
            type:dataTypes.STRING(100),
            allowNull: false,
        },
        description:{
            type:dataTypes.STRING(100),
            allowNull: false,
        },
        size:{
            type:dataTypes.STRING(100),
            allowNull: false,
        },
        idCategory:{
            type:dataTypes.STRING(50),
            allowNull: false,
        },

        idType:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        //no se si ponerle autoIncrement:true,
        price:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        disc:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false,

        },      


    }

    let config = {
        tableName:"products",
        timestamps: false
    }

    let products = sequelize.define(alias, cols, config);


    products.associate = function(models){   

        products.belongsToMany(models.carts_buy,{
            as: "products",
            through:"carts_products",
            foreignKey:"idCartsBuy" ,
            otherKey: "id",
            timestamps: false,
        });

        products.hasMany(models.carts_products,{
                as: "products_carts_products" ,  //revisar todos los "as"
                foreignKey:"id" ,
        });    

        products.belongsTo(models.typeProduct,{
            as: "products_type" ,  //revisar todos los "as"
            foreignKey:"idType" ,
        }); 

        products.hasMany(models.categories_prod,{
            as: "products_categories_prod" ,  //revisar todos los "as"
            foreignKey:"id" ,
        }); 


    }
    return products;
    
}