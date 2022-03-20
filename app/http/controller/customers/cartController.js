let cartController = () => {
    // factory functions : new concept in javascript
    return {
        // for read -> use index method
        index(req, res) {
            res.render('customers/cart');
        },


    }
}
module.exports = cartController;