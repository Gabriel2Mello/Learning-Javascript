// npm start
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Send</button>
    </form>
    `);
});

app.get('/tests/:idUser?/:parametro?', (request, response) => {
    console.log(request.params);
    console.log(request.params.idUser);
    console.log(request.query.facebook);

    response.send(request.params);
})

app.post('/', (request, response) => {
    console.log(request.body);

    response.send('Received: ' + request.body.nome);
});

app.listen(3000, () => {
    console.log('Server executing...');
    console.log('Access: http://localhost:3000');
});
