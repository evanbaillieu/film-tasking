module.exports = function (app) {



    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, Content-Type, Accept"
        );
        next();
      });


    const auth = require("./auth.routes");
    app.use('/api/auth', auth);

    const user = require("./user.routes");
    app.use('/api/test', user);
    
    const film = require("./film.routes");
    app.use('/api/film', film);



}