// npm start
require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Database connected!');
        app.emit('done');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoScore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { mainMiddleware } = require('./src/Middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'Q69::KOh@N.^NU#Q`!6!QBQNSGMZ(2',
    store: MongoScore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'Views'));
app.set('view engine', 'ejs');

app.use(mainMiddleware);
app.use(routes);

app.on('done', () => {
    app.listen(3000, () => {
        console.log('Server executing...');
        console.log('Access: http://localhost:3000');
    });
});
