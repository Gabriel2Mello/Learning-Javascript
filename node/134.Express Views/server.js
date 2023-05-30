// npm start
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve(__dirname, 'src', 'Views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Server executing...');
    console.log('Access: http://localhost:3000');
});