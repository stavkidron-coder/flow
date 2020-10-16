// consts
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//routes


// Start server
app.listen(port, () => {
    console.log('Up and running on port:', port);
});