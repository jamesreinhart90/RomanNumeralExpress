var middlewareObj = {};

middlewareObj.test = function (req, res, next) {
    next();
}

module.exports = middlewareObj;