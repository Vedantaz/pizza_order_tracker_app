const express = require('express');
const app = express() // functionality which express provides are stored in app variable.
const PORT = process.env.PORT || 3300;
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path')  // it is an inbuilt module in node.js...
let mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js/app.js').sass('resources/scss/app.scss', 'public/css/app.css');

// setting template engine
app.use(expressLayout);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname + '/resources/views'));
app.set('view engine', 'ejs');
require('./routes/web')(app)      // we will receive function from web.js file 



app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
})