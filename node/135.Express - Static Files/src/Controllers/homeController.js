exports.homePage = (request, response) => {
    response.render('index');
}

exports.GetPost = (request, response) => {
    response.send('New post route');
}