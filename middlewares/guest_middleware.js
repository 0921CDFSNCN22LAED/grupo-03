function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        console.log(req.session.userLogged);
        return res.redirect('/users/profile/'+req.session.userLogged.id);
    }
    next();
}

module.exports = guestMiddleware;