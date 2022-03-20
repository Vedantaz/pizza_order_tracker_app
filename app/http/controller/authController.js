let authController = () => {
    // factory functions : new concept in javascript
    return {
        // for read -> use index method
        login(req, res) {
            res.render('auth/login');
        },
        register(req, res) {
            res.render('auth/register');
        },

    }
}
module.exports = authController;