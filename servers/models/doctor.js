const mongoose = require("mongoose");

const Ward = new mongoose.Schema({
    report: String,
    status: String,
    prescription: String,
    patient_id: Number
   
}, {
    timestamps: true
})

const Doctor = mongoose.model('staff', Ward)
module.exports = Doctor