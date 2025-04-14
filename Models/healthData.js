const mongoose = require('mongoose');

let healthData = new mongoose.Schema({
    dateOfRecord : {
        type : Date,
        default : Date.now(),
        required : true
    },
    bodyTemperature : {
        type : String,
        required : true
    },
    bloodPressure : {
        type : String,
        required : true
    },
    heartRate : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('records' , healthData);