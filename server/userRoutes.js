const express = require('express');
const userSchema = require('./models/usersSchema');
const userRouter = express();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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
        contact: {
            email: req.body.contact.email,
            cellphhone: req.body.contact.cellphone,
        },
        shippingAd: {
            house: req.body.shippingAd.house,
            road: req.body.shippingAd.road,
            complex: req.body.shippingAd.complex,
            city: req.body.shippingAd.city,
            province: req.body.shippingAd.province,
            postalCode: req.body.shippingAd.postalCode,
        }
       
    });

    user.save()
        .then(item => {
            res.json(item)
            console.log(item)
        })
        .catch(err => {
            res.status(400).json({ mssg: err, err: err })
        })
});

userRouter.get('/api/getperson/:Role', async (req, res) => {
    const personRole = await userSchema.find({ Role: req.params.Role });
    res.json(personRole)
});

userRouter.get('/api/getcustomer/:id', async (req, res) => {
    const person = await userSchema.findById(req.params.id);
    res.json(person)
});

userRouter.post('/api/loginuser',async (req, res) =>{
    const findUser = await userSchema.findOne({
        "contact.email": req.body.email
    });

    if(findUser){
        if(await bcrypt.compare(req.body.password, findUser.password)){
            console.log(findUser)
            return res.json(findUser)
        } else{
            console.log("something went wrong")
            return res.json(false)
        }
    
    } else{
        res.json(false)
    }
});

module.exports = userRouter;
