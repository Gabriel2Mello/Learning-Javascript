 exports.mainMiddleware = (req, res, next) => {
    next();
};

exports.anotherMiddleware = (req, res, next) => {
        next();
    };