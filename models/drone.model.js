const mongoose = require('mongoose')


let DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number

})

let DroneModel = mongoose.model('mydrone', DroneSchema)

module.exports = DroneModel