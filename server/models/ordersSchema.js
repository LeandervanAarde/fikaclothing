const mongoose = require('mongooose');

const orders = mongoose.Schema({
    customerDetails: [
        {
            type: { type: Schema.Types.ObjectId, ref: 'users' }
        }
    ],
    orderInformation: [
        {
            orderDate: {
                type: Date,
                default: Date.now
            },
            deliveryDate: {
                type: Date,
                default: Date.now + 4
            },
            orderStatus: String,
            products: [
                {
                    type: { type: Schema.Types.ObjectId, ref: 'products' },
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