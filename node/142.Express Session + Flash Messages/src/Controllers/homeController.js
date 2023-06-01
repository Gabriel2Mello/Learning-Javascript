exports.homePage = (request, response) => {
    //console.log(request.session.usuario);
    // request.flash('info', 'Hello, world!');
    // request.flash('error', 'Error Mesage!');
    // request.flash('success', 'Success Message!');
    //console.log(request.flash('error'), request.flash('success'), request.flash('info'));
    response.render('index');
    return;
}

exports.GetPost = (request, response) => {    
    response.send(request.body);
    return;
}