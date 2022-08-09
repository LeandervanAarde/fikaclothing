const mongoose = require('mongoose');

const orders = mongoose.Schema({
    customerDetails: [
             { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    ],
    orderInformation: [
        {
            orderDate: {
                type: Date,
                default: Date.now
            },
            deliveryDate: {
                type: Date,
                default: () => Date.now() + 4*24*60*60*1000
            },
            orderStatus: String,
            products: [
                {
                    shoe:{ type: mongoose.Schema.Types.ObjectId, ref: 'products' },
                    color: {
                        type: String,
                        required: true,
                    },
                    size: {
                        type: Number,
                        required: true
                    }
                }
            ]
        },
    ]
});

module.exports = mongoose.model('orders', orders);