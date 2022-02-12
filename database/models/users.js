module.exports = function (sequelize , dataTypes){

    let alias = "users";

    let cols = {
        id:{
            type:dataTypes.INTEGER ,
            primaryKey: true ,
            autoIncrement:true, 
            allowNull: true,
        },
        firstName: {
            type:dataTypes.STRING(50),
            allowNull: true,
        },
        lastName:{
            type:dataTypes.STRING(50),
            allowNull: true,
        },
        email:{
            type:dataTypes.TEXT,
            allowNull: true,
        },
        password:{
            type:dataTypes.STRING(300),
            allowNull: false,
        },
        idCategory:{
            type:dataTypes.INTEGER ,
            allowNull: true,
        },
        avatarIMG:{
            type: dataTypes.TEXT,
        },
        phone:{
            type: dataTypes.STRING(10),
        },
        adress:{
            type: dataTypes.STRING(100),
        },
        location:{
            type: dataTypes.STRING(20),
        },
        state:{
            type: dataTypes.STRING(20),
        },

    }

    let config = {
        tableName:"users",
        timestamps: false
    }

    let users = sequelize.define(alias, cols, config);

    users.associate = function(models){   
        
        users.hasMany(models.carts_buy,{
            as: "users_carts_buy",
            foreignKey: "idUsers"
        });

        users.belongsTo(models.categories_users,{
            as:"users_categories",
            foreignKey: "idCategory"
        });

        
        /*
        users.belongsTo(models.carts_buy,{
            as: "users_carts_buy" ,  //revisar todos los "as"
            foreignKey:"idUsers" ,
        }); 
        users.hasMany(models.categories_users,{
            as: "users_categories_users" ,  //revisar todos los "as"
            foreignKey:"idCategoryUsers" ,
        }); 
        */
       
       
       /*
       users.belongsTo(models.adress,{
           as:"users_adress",
           foreignKey:"idAdress"
       });
       */
    }

    return users;
    
}