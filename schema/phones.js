const mongoose = require('mongoose')
const Schema = mongoose.Schema
const phone = new Schema({
    manufacturer: { type: String, default: "DCSL Guidesmith" },
    model: String,
    image: { type: String, default: "https://cdn.pocket-lint.com/r/s/970x/assets/images/153887-phones-review-nokia-83-image11-8jhq0lhifd.jpg" },
    price: Number,
    description: String,
    specs: {
        body: { type: String, default: "157.9 x 76.4 x 8.3 mm (6.22 x 3.01 x 0.33 in)" },
        camera: {
            main: { type: String, default: "12MP + 5MP" },
            selfie: { type: String, default: "20MP + 2MP" },
            features: { type: String, default: "Dual-LED flash, HDR, panorama" },
        },
        memory: { type: String, default: "64 GB, 4/6 GB RAM or 32 GB, 3 GB RAM" },
        chipset: { type: String, default: "Qualcomm SDM636 Snapdragon 636 (14 nm)" },
        display: { type: String, default: "6.26 inches, 97.8 cm2 (~81.1% screen-to-body ratio)" },
        platform: { type: String, default: "Android 8.1 (Oreo), planned upgrade to Android 9.0 (Pie); MIUI 9.0" },
    },
    stock: {type: Number, default: 1}
});
const Phone = mongoose.model("Phones", phone)

module.exports = Phone