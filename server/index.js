const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5001; 
const uri =process.env.DB_CONNECTION;
const db = mongoose.connection.useDb('allshoes')
console.log(db)

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);

mongoose.connect(uri,(err) =>{
    err? console.log('not connected to DB'): (console.log("Connected to DB"));
    // console.log(mongoose.connection.db) 
});

app.listen(PORT, () =>{console.log(`Server is now running on ${PORT}`)}); 

