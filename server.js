const express = require('express');
const app = express() // functionality which express provides are stored in app variable.
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(PORT);

    console.log(`Listening on port : ${PORT}`);
})
app.get('/', (req, res) => {
    res.send('Hello World');

})