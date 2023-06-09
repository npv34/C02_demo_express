const express = require('express');
const HomeController = require("../controllers/home.controller");
const AuthController = require("../controllers/auth.controller");
const router = express.Router();

router.get('/admin/home', HomeController.getHomePage)
router.get('/users/:id', HomeController.getHomePage)
router.get('/admin/login', AuthController.showLoginPage)
router.post('/admin/login', AuthController.login)
module.exports = router
