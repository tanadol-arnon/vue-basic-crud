const express = require('express');
const productRoute = express.Router();

let ProductModel = require('../models/Product');

productRoute.get('/', function (req, res, next) {
    ProductModel.find((error, result) => {
        if (error) {
            return next(error);
        } else {
            res.json(result);
        }
    });
});

productRoute.post('/create-product', (req, res, next) => {
    ProductModel.create(req.body, (error, result) => {
        if (error) {
            return next(error);
        } else {
            res.json(result);
        }
    });
});

productRoute.get('/edit-product/:id', (req, res, next) => {
    ProductModel.findById(req.params.id, (error, result) => {
        if (error) {
            next(error);
        } else {
            res.json(result);
        }
    });
});

productRoute.put('/update-product/:id', (req, res, next) => {
    ProductModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, result) => {
        if (error) {
            return next(error);
        } else {
            res.json(result);
            console.log('Product updated successfully');
        }
    });
});

productRoute.delete('/delete-product/:id', (req, res, next) => {
    ProductModel.findByIdAndDelete(req.params.id, (error, result) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: result
            });
        }
    });
});

module.exports = productRoute;
