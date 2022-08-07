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
    },
    images:[
       {
        type: String, 
        required: true
       }
    ],
    reviews:[
        {
            name:{
                type: String,
                required: true,
            },
            review:{
                type: String,
                required: true,
            },
            rating:{
                type: Number,
                required: true,
                min: 0, 
                max: 5,
            }
        }
    ],
    availableStock: [
        {
            size:{
                type: Number,
                required: true
            }, 
            totalStock: {
                type: Number,
                required: true
            },
            variations: [
                {
                    color: {
                        type: String,
                        required: true
                    },
                    stock: {
                        type: String,
                        required: true
                    }
                    
                }
            ]
        }
    ]
});

module.exports = mongoose.model('products', products);