//creating mongodb connnection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');
const db = mongoose.connection;
db.on('error', console.error.bind('Error connecting to mongo db'));
db.once('open', function(){
    console.log("Connected to database");
})
module.exports = db;