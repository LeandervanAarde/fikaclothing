const express = require('express');
const userSchema = require('./models/usersSchema');
const userRouter = express();

//Routes entered here;

//   userRouter.get('/api/allUsers', async (req, res) => {
//         const findProducts = await productSchema.find();
//         res.json(findProducts); 
//     });

// router.get('/api/individualproduct/:id', async(req,res) =>{
//     const singleProduct = await routesSchema.findById(req.params.id);
//     return res.json(singleProduct) 
// });


userRouter.post('/api/adduser', (req, res) =>{
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
    })

    user.save()
    .then(item =>{
        res.json(item)
    })
    .catch(err =>{
        res.status(400).json({mssg: "Bad request, error 400", err: err})
    })
});

// router.get('/api/getproducts/:brand', async(req, res) =>{
//     const brandedProducts = await routesSchema.find({brand: req.params.brand});
//     res.json(brandedProducts)
// })





module.exports = userRouter;
