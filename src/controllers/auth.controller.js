const UserModel = require('../models/user.model')
const session = require('express-session')

class AuthController {
    static showLoginPage(req, res) {
        let text = ""
        if (req.session.errLogin) {
            text = req.session.errLogin;
            console.log(text)
        }
        res.render('auth/login', {message: text})
    }

    static async login(req, res) {
        const {email, password} = req.body;
        let user = await UserModel.findUser(email, password)
        if (user.length > 0) {
            req.session.userLogin = user[0];
            return res.redirect(301, '/admin/home')
        } else {
            req.session.errLogin = "Account not exists!";
            return res.redirect(301, '/admin/login')
        }
    }
}

module.exports = AuthController
