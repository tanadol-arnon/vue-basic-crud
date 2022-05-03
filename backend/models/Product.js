const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    name: {
        type: String
    },
    detail: {
        type: String
    },
    price: {
        type: Number
    },
}, {
    timestamps: true,
    collection : 'products'
})

module.exports = mongoose.model('Product', productSchema);