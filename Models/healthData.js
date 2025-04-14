const mongoose = require('mongoose');

let healthData = new mongoose.Schema({
    dateOfRecord : {
        type : Date,
        default : Date.now(),
    },
    bodyTemperature : {
        type : String,
    },
    bloodPressure : {
        type : String,
    },
    heartRate : {
        type : String,
    }
})

module.exports = mongoose.model('records' , healthData);