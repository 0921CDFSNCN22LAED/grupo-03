
const res = require('express/lib/response');
const fs = require('fs');
const path = require("path");

const db = require("../database/models");


const user = {
    //fileName :'../data/users.json',

    saveUser:function() {
        const text = JSON.stringify(users, null, 4);
        fs.writeFileSync(usersFilePath, text, "utf-8");
    },
    
    getData: function() {
        
        return db.users.findAll();
            

       // return JSON.parse(fs.readFileSync(path.join(__dirname,"../data/users.json"), 'utf-8'));
    },

    generateId: function() {
        let allUsers = this.findAllUsers();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },
    
    findAllUsers: function() {
        return this.getData();
    },

    findByPkUsers: async function(id) {
        

        return db.users.findByPk(id);
    },

    findByFieldUsers: async function(field, text) {

        await db.users.findAll({
            where: {
              email: text,
            }
          });
        
        let allUsers = this.findAllUsers();
       
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
        
    },

    createUser: async function(req) {

       await db.users.create({
            idUser: this.generateId(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            idCategory: 1,
            idAdress: 1,
            avatarIMG: req.body.avatar 

        });
        
        
        let allUsers = this.findAllUsers();
        
        let newUser = {
            id: this.generateId(),
            ...userData,
            file
        }
        allUsers.push(newUser);
        fs.writeFileSync(path.join(__dirname,"../data/users.json"), JSON.stringify(allUsers, null, ' '));
        return newUser;
        
    },
    change: async function(id) {

        await db.users.findByPk(id);

        
        let allUser = this.findAllUsers();

        const index = allUser.findIndex((user) => {
            return user.id == id;
        });

        let userPut = this.findByPk(parseInt(id));

        const userUpdate = {
            id: allUser[index].id,
            email:userPut.email,
            password:userPut.password,
            repassword:userPut.repassword,
            ...userChange,
            avatar: allUser[index].avatar,
        };

        



        allUser[index] = userUpdate;

        console.log(userUpdate);

        fs.writeFileSync(path.join(__dirname,"../data/users.json"), JSON.stringify(allUser, null, ' '));

        return userUpdate;
        
    },

    delete: function(id) {
        let allUsers = this.findAllUsers();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(path.join(__dirname,"../data/users.json"), JSON.stringify(finalUsers, null, ' '));
        return true;
    }
    
}

module.exports = user;
