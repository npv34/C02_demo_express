const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./src/routers/web.router');
const database = require('./src/models/database')
const session = require("express-session");
const PORT = 8000;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
//cau hinh static file
app.use(express.static('public'));
// set thu template lam thu muc goc view engine
app.set('views', path.join(__dirname, 'src/template'));
// set up su dung view engine nao
app.set('view engine', 'ejs');
// setup session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
// router
app.use(router);

database.connectDB().connect((err) => {
    if (err){
        throw err;
    }
    console.log('successfully')
})

app.listen(PORT, 'localhost', () => {
    console.log('server listening on port ' + PORT)
})
