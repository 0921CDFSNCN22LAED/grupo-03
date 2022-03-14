function adminAuthMiddleware(req, res, next) {
  console.log(req.session.userLogged)
    if (req.session.userLogged == undefined || req.session.userLogged.idCategory != 2) {
        return res.redirect('/');
    }
    next();
}
module.exports = adminAuthMiddleware;