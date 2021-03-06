require('dotenv').config();
const express = require('express');
const app = express() // functionality which express provides are stored in app variable.
const PORT = process.env.PORT || 3300;
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path')  // it is an inbuilt module in node.js...
let mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js/app.js').sass('resources/scss/app.scss', 'public/css/app.css');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDbStore = require('connect-mongo');
const MongoStoreFinal = MongoDbStore(session);
const flash = require('express-flash');
const { nextTick } = require('process');


// Database connection with mongoose
const url = 'mongodb://127.0.0.1/pizza';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
}).on('message', err => {
    console.log("Error in database connection");
})

// Session store
let mongoStore = new MongoStoreFinal({
    mongooseConnection: connection,
    collection: 'sessions'
})
//Global middleware 
app.use((res, req) => {
    res.locals.session = req.session;
    next();
})

// Session config 
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: mongoStore,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
    // cookie: { maxAge: 1000 * 10 } // upto 24 hours it validate the session
}))

// setting template engine
app.use(expressLayout);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('views', path.join(__dirname + '/resources/views'));
app.set('view engine', 'ejs');
require('./routes/web')(app)      // we will receive function from web.js file 
app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
})