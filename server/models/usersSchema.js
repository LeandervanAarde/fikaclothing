const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const users = mongoose.Schema({
    Role: {
        type: String, 
        default: 'Customer' 
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
        house:{
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
            type: String,
            required: true,
        },
        Country:{
            type: String,
        },
    },
    newsletter:{
        type: Boolean,
        default: false
    },
    wishlist: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'products'}
    ]
});

users.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    console.log(this.password);
});

// users.methods.createJWT = function () {
//     return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
// };

module.exports = mongoose.model('users', users);

