const database = require('./database')
class BaseModel {
    constructor() {
        this.conn = database.connectDB();
    }

    querySQL(sql) {
        return new Promise((resolve, reject) => {
            this.conn.query(sql, (err, result) => {
                if (err) return reject(err.message)
                return resolve(result)
            })
        })
    }
}

module.exports = BaseModel;
