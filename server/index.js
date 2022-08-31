const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const orderRouter = require('./ordersRoutes');
const routes = require('./routes');
const userRouter = require('./userRoutes');
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5001; 
const uri =process.env.DB_CONNECTION;
const db = mongoose.connection.useDb('allshoes')
// const multer = require('multer');
// console.log(db)

app.use(cors({origin:'http://localhost:3000'}));

// const productImageStore = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, './productImages');
//     }, 

//     filename: (req, file, callBack) => {
//         console.log(file);
//         callBack(null, Date.now() + path.extname(file.originalname))
//     }
// });
// const fileFilter = (req, file, cb) => {
//     if (
//         file.mimetype === 'image/png' ||
//         file.mimetype === 'image/jpg' ||
//         file.mimetype === 'image/jpeg'
//     ) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };

// app.use(
//     multer({
//         storage: productImageStore,
//         fileFilter: fileFilter,
//     }).array('images')
// );

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(routes);
app.use(userRouter);
app.use(orderRouter);

mongoose.connect(uri,(err) =>{
    err? console.log('not connected to DB'): (console.log("Connected to DB"));
    // console.log(mongoose.connection.db) 
});

app.listen(PORT, () =>{console.log(`Server is now running on ${PORT}`)}); 

