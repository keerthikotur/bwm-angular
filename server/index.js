const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDB = require('./fake-db');
const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDB();
    fakeDb.seeDB();
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const port = process.env.port || 3001;

app.listen(3001, function(){
    console.log("I am running");
})