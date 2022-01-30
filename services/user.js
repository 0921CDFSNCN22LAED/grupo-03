const fs = require('fs');
const path = require("path");
/*
const usersFilePath = path.join(__dirname, "../data/users.json");
const usersFileText = fs.readFileSync(usersFilePath, "utf-8");
const users = JSON.parse(usersFileText); //ARRAY de USUARIOS
*/


const user = {
    fileName :'../data/users.json',
    /*
    saveUser:function() {
        const text = JSON.stringify(users, null, 4);
        fs.writeFileSync(usersFilePath, text, "utf-8");
    },
    */

    getData: function() {
        return JSON.parse(fs.readFileSync(path.join(__dirname,"../data/users.json"), 'utf-8'));
    },

    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function() {
        return this.getData();
    },

    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function(userData,file) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData,
            file
        }
        allUsers.push(newUser);
        fs.writeFileSync(path.join(__dirname,"../data/users.json"), JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    change: function(id, userChange) {
        let allUser = this.findAll();

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
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(path.join(__dirname,"../data/users.json"), JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = user;