const express = require('express');
const orderSchema = require('./models/ordersSchema');
const orderRouter = express();

//Enter routes/endpints

orderRouter.post('/api/addorder', (req,res) =>{
    const newOrder = new orderSchema({
        customerDetails: req.body.customerDetails,
        orderInformation: req.body.orderInformation,
        orderStatus: req.body.orderInformation.orderStatus,
        products: req.body.orderInformation.products,
    });

    newOrder.save()
    .then(order =>{
        res.json(order)
    })
    .catch(err =>{
        res.status(400).json({ mssg: "Bad request, error 400", err: err })
    })
});

orderRouter.get('/api/allorders', async (req, res) =>{
    const orders = await orderSchema.find();
    res.json(orders);
});

orderRouter.get('/api/singleorder/:id', async(req, res) =>{
    const singleOrder = await orderSchema.findById(req.params.id);
    return res.json(singleOrder);
});

module.exports = orderRouter;