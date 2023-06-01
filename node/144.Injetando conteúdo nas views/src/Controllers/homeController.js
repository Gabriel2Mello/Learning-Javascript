exports.homePage = (req, res) => {
    res.render('index', {
        titulo: '<span style="color: red;">Título</span> da página',
        numeros: [ 0,1,2,3,4,5,6,7,8,9 ]
    });
    return;
}

exports.GetPost = (req, res) => {    
    res.send(req.body);
    return;
}