
const db = require("../database/models");

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    const emailInCookie = req.cookies.userEmail;

   

   if(emailInCookie == undefined){

    return next();
   }

    db.users.findAll({
        where: {
          email: emailInCookie,
        }
      }).then(function(userFromCookie){

        if (userFromCookie.length > 0) {
            req.session.userLogged = userFromCookie;

            next();
        }

        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
            next();
        };

      });

    
}

module.exports = userLoggedMiddleware;
