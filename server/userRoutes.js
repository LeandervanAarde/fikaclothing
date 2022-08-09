const express = require('express');
const userSchema = require('./models/usersSchema');
const userRouter = express();

//Routes entered here;

userRouter.get('/api/allusers', async (req, res) => {
    const findusers = await userSchema.find();
    res.json(findusers);
});

userRouter.get('/api/individual/:id', async (req, res) => {
    const singlePerson = await userSchema.findById(req.params.id);
    return res.json(singlePerson)
});

userRouter.post('/api/adduser', (req, res) => {
    const user = new userSchema({
        Role: req.body.Role,
        name: req.body.name,
        password: req.body.password,
        birthday: req.body.birthday,
        displayName: req.body.displayName,
        contact: req.body.contact,
        shippingAd: req.body.shippingAd,
        house: req.body.shippingAd.house,
        road: req.body.shippingAd.road,
        complex: req.body.shippingAd.complex,
        city: req.body.shippingAd.city,
        province: req.body.shippingAd.province,
        postalCode: req.body.shippingAd.postalCode,
        Country: req.body.shippingAd.Country,
        newsletter: req.body.newsletter,
        wishlist: req.body.wishlist,
    });
    user.save()
        .then(item => {
            res.json(item)
        })
        .catch(err => {
            res.status(400).json({ mssg: "Bad request, error 400", err: err })
        })
});

userRouter.get('/api/getperson/:Role', async (req, res) => {
    const personRole = await userSchema.find({ Role: req.params.Role });
    res.json(personRole)
})

module.exports = userRouter;
