 exports.mainMiddleware = (req, res, next) => {
//module.exports = (req, res, next) => {
    console.log('Main middleware - Pass');

    if (req.body.client) {
        console.log('New Client: ' + req.body.client);
    }

    next();
};

exports.anotherMiddleware = (req, res, next) => {
        console.log('Another middleware - Pass');
    
        next();
    };