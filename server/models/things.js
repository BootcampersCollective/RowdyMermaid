var mongoose = require('mongoose');

var thingSchema = mongoose.Schema({
    name : String,
    stuff : String
});

module.exports = mongoose.model('Thing', thingSchema);