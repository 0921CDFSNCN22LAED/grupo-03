module.exports = function (sequelize , dataTypes){

    let alias = "type";

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
        tableName:"type",
        timestamps: false
    }

    let type = sequelize.define(alias, cols, config);

    type.associate = function(models){      

        type.hasMany(models.products,{
            as: "type_products" ,  //revisar todos los "as"
            foreignKey:"idType" ,
        }); 

    }

    return type;
    
}