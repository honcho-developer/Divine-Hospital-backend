const mongoose = require("mongoose");

const Ward = new mongoose.Schema({
    first: String,
    last: String,
    address: String,
    state: String,
    next: String,
    phone: Number,
    health: String

}, {
    timestamps: true
})

const Patient = mongoose.model('patients', Ward)
module.exports = Patient