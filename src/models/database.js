const mysql = require('mysql')
class Database {

    constructor() {
        this.host = '127.0.0.1';
        this.port = 3306;
        this.database = "eshop-app";
        this.user = "root";
        this.password = "123456@Abc";
    }

    connectDB() {
        return mysql.createConnection({
            host: this.host,
            port: this.port,
            database: this.database,
            user: this.user,
            password: this.password
        });

    }
}

module.exports = new Database();
