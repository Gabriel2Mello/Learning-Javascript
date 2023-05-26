// npm start
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Send</button>
    </form>
    `);
});

app.post('/', (request, response) => {
    response.send('Form sent');
});

app.get('/contact', (request, response) => {
    response.send('Thank you for the contact');
});

app.listen(3000, () => {
    console.log('Server executing...');
    console.log('Access: http://localhost:3000');
});
