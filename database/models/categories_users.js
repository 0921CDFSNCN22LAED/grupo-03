module.exports = function (sequelize , dataTypes){

    let alias = "categories_users";

    let cols = {
        idCategoryUsers:{
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
        tableName:"categories_users",
        timestamps: false
    }

    let categories_users = sequelize.define(alias, cols, config);

    categories_users.associate = function(models){      

        categories_users.belongsTo(models.users,{
            as: "categories_users_users" ,  //revisar todos los "as"
            foreignKey:"category" ,
        }); 

    }

    return categories_users;
    
}