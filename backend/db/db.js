const mysql = require('mysql2');

const  dbConnect =  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'film-appointment'
    });

module.exports =dbConnect.promise();