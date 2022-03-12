function adminAuthMiddleware(req, res, next) {
   
    if (req.session.userLogged.idCategory == 1) {
        return res.redirect('/');
    }
    next();
}
module.exports = adminAuthMiddleware;