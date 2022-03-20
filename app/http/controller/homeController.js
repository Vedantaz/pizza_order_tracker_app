let homeController = () => {
    // factory functions : new concept in javascript
    return {
        // for read -> use index method
        index(req, res) {
            res.render('home')
        },

    }
}
module.exports = homeController;