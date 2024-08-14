const mongoose = require('mongoose');



mongoose.connect("mongodb://localhost:27017/employee")
    .then(() => {
        console.log('MongoDB Connected...')
    }).catch((err) => {
        console.log('Error while MongoDB connecting ...', err);
    })