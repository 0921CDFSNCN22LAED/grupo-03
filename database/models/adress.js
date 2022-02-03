module.exports = function (sequelize , dataTypes){

    let alias = "adress";

    let cols = {
        idAdress:{
            type:dataTypes.INTEGER ,
            primaryKey: true ,
            autoIncrement:true,
            allowNull: false,
        },
        adressStreet:{
 // tipo de dato "DATE" cual poner?           type:dataTypes.INTEGER ,
            allowNull: false,
        },
        location:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        city:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },
        postalCode:{
            type:dataTypes.INTEGER ,
            allowNull: false,
        },

        
    }

    let config = {
        tableName:"adress",
        timestamps: false
    }

    let adress = sequelize.define(alias, cols, config);


    adress.associate = function(models){      

        adress.belongsTo(models.users,{
                as: "adress_users" ,  //revisar todos los "as"
                foreignKey:"idAdress" ,
            }); 

    }
    return adress;
    
}