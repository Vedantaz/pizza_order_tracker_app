const Menu = require('./../../models/menu')

let homeController = () => {
    // factory functions : new concept in javascript
    return {
        // for read -> use index method
        async index(req, res) {
            const pizzas = await Menu.find()
            res.render('home', { pizzas: pizzas })
            console.log(pizzas);

            // Menu.find().then(function (pizzas) {

            // })


        },

    }
}
module.exports = homeController;