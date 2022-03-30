const homeController = require('../app/http/controller/homeController')
const authController = require('../app/http/controller/authController')
const cartController = require('../app/http/controller/customers/cartController')
let initRoutes = (app) => {

    app.get('/', homeController().index)           // object ke upar jo function hota hain  > method

    app.get('/cart', cartController().index)

    app.get('/login', authController().login)

    app.get('/register', authController().register);
    app.post('/update-cart', cartController().update)


}
module.exports = initRoutes;