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