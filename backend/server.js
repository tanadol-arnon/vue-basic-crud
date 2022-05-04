const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const database = require('./database');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connect successfully');
}, error => {
    console.log('Cannot connect database' + error);
})

const productAPI = require('../backend/routes/product.route');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', productAPI);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Listening on port ' + port);
});

app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.log(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
