const mongoose = require('mongoose')

const products = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        required: true
    },
    timeStamp:{
        type: Date,
        default: Date.now
    },
    description:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('products', products);

