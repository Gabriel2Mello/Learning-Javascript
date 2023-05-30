const HomeModel = require('../Models/HomeModel');

// HomeModel.create({
//     titulo: 'Título de testes',
//     descricao: 'Descrição de testes.'
// })
//     .then(content => console.log(content))
//     .catch(e => console.log(e));

HomeModel.find()
    .then(content => console.log(content))
    .catch(e => console.log(e));    

exports.homePage = (request, response) => {
    console.log('Doing');
    response.render('index');
    console.log(request.session);
    return;
}

exports.GetPost = (request, response) => {    
    response.send(request.body);
    return;
}