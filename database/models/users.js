module.exports = function (sequelize , dataTypes){

    let alias = "users";

    let cols = {
        id:{
            type:dataTypes.INTEGER ,
            primaryKey: true ,
            autoIncrement:true,
            allowNull: false,
        },
        firstName: {
            type:dataTypes.STRING(50),
            allowNull: false,
        },
        lastName:{
            type:dataTypes.STRING(50),
            allowNull: false,
        },
        email:{
            type:dataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:dataTypes.STRING(50),
            allowNull: false,
        },
        category:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        idAdress:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        avatarIMG:{
            type: dataTypes.STRING,
        },

    }

    let config = {
        tableName:"users",
        timestamps: false
    }

    let users = sequelize.define(alias, cols, config);

    users.associate = function(models){      

        users.belongsTo(models.carts_buy,{
            as: "users_carts_buy" ,  //revisar todos los "as"
            foreignKey:"idUsers" ,
        }); 
        users.hasMany(models.categories_users,{
            as: "users_categories_users" ,  //revisar todos los "as"
            foreignKey:"id" ,
        }); 
        users.hasMany(models.adress,{
            as: "users_adress" ,  //revisar todos los "as"
            foreignKey:"id" ,
        }); 



    }

    return users;
    
}