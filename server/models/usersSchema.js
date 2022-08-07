const mongoose = require('mongoose');

const users = mongoose.Schema({
    Role: {
        type: String, 
        required: true, 
    }, 
    name: {
        type: String,
        required: true
    }, 
    password: {
        type: String, 
        required: true
    },
    birthday:{
        type: String,
        required: true
    },
    displayName: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    contact:{
        email:{
            type: String,
            required: true
        },
        cellphone: String,
    },
    shippingAd:{
        houseNr:{
            type: Number,
            required: true,
        },
        road:{
            type: String, 
            required: true,
        },
        complex: String,
        city: {
            type: String,
            required: true,
        },
        province:{
            type: String,
            required: true,
        },
        postalCode:{
            type: Number,
            required: true,
        },
        Country:{
            type: String,
            required: true,
        },
    },
    newsletter:{
        type: Boolean,
        default: false
    },
    wishlist: [
        {
            product: {
                type: { type: Schema.Types.ObjectId, ref: 'products'}
            },
        }
    ]
});

module.exports = mongoose.model('users', users);