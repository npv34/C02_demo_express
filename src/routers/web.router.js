const express = require('express');
const HomeController = require("../controllers/home.controller");
const router = express.Router();

router.get('/', HomeController.getHomePage)
router.get('/users/:id', HomeController.getHomePage)

module.exports = router
