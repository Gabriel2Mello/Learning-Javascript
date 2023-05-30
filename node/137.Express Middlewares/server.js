// npm start
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { mainMiddleware, anotherMiddleware } = require('./src/Middlewares/middleware');
//const mainMiddleware = require('./src/Middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'Views'));
app.set('view engine', 'ejs');

app.use(mainMiddleware);
app.use(anotherMiddleware);
app.use(routes);

app.listen(3000, () => {
    console.log('Server executing...');
    console.log('Access: http://localhost:3000');
});