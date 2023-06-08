class HomeController {
    static getHomePage(req, res) {
        const nameUser = "Phong"
        res.render('home', {name: nameUser, age: 20})
    }
}

module.exports = HomeController;
