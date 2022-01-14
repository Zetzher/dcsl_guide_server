const mongoose = require('mongoose')
const Schema = mongoose.Schema
const phone = new Schema({
    manufacturer: String,
    model: String,
    model: String,
    image: String,
    price: Number,
    description: String,
    specs: {
        body: String,
        camera: {
            main: String,
            selfie: String,
            features: String
        },
        memory: String,
        chipset: String,
        display: String,
        platform: String
    },
    stock: Number
});
const Phone = mongoose.model("Phones", phone)

module.exports = Phone