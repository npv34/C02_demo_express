const BaseModel = require('./base.model')
class UserModel extends BaseModel {
    constructor() {
        super();
    }

    async findUser(email, password) {
        const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
        return await this.querySQL(sql);
    }
}

module.exports = new UserModel();
