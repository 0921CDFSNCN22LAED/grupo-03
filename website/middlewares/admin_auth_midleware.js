function adminAuthMiddleware(req, res, next) {
    if (!req.session.userLogged && req.session.userLogged.dataValues.idCategory!=2) {
        return res.redirect('/');
    }
    next();
}

module.exports = adminAuthMiddleware;