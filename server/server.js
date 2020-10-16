// consts
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//routes
let inputsRouter = require('./routes/inputs_router');
app.use('/inputsLibrary', inputsRouter);

// Start server
app.listen(port, () => {
    console.log('Up and running on port:', port);
});