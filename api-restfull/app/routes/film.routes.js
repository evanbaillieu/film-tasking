    const { authJwt } = require("../middleware");   
    const controller = require("../controllers/film.controller");

    const router = require("express").Router();
    
    
    
    router.post('/', controller.create)

    router.get('/', controller.findAll)

    router.get('/title/', controller.findByTitle)
    
    router.get('/all/',[authJwt.verifyToken], controller.findAllV2)
    
    router.get('/user/:id', controller.findByUser)
    
    router.get('/:id', [authJwt.verifyToken],controller.findById)
    
    

    module.exports = router
