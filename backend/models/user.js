const connection = require('../db/db');

module.exports = class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    saveUser() {
        return  connection.query('INSERT INTO users(name,email,password) VALUES(?,?,?)', [this.name,this.email,this.password]);
    }
    static getUserByEmail(email){
        return connection.query('SELECT * FROM users WHERE users.email=?',[email]);
    }
}