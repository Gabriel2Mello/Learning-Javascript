 exports.mainMiddleware = (req, res, next) => {
    res.locals.localVar = 'Value local var.';
    next();
};

exports.anotherMiddleware = (req, res, next) => {
        next();
    };