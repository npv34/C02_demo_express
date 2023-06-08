const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const router = require('./src/routers/web.router')
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

// router
app.use(router);

app.listen(PORT, 'localhost', () => {
    console.log('server listening on port ' + PORT)
})
