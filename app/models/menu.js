// model hota hain singular aur tables ka collection hota hain plural ..
// model ka name ko plural hai
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/pizza';
const Schema = mongoose.Schema;

new menuSchema({    // schema is a class
    name: { type: String, required: true },
    image: { type: String, required: true },
    prize: { type: Number, required: true },
    size: { type: String, required: true },


})          // blue-print humare table ki in mongoose
module.exports = mongoose.model('Menu', menuSchema);
