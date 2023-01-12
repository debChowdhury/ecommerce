const mongoose = require('mongoose');
//schema for products model
const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    quantity:{
        type: Number,
        required: true
    },
    
},{
    timestamps:true
}); 
const model = mongoose.model('Product', schema);
module.exports = model;