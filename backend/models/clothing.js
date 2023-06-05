// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const clothingSchema = new Schema({
//clothing style (ie shirts and hoodies)
    style_num: {
        type: String,
        required: true,
    },
//clothing size: 
    size: {
        type: String, 
        enum: ["XS", "S", "M", "L", "XL"],
        default: "M"
    },
//clothing color:
    color: {
        type: String,
        enum: ["black", "navy", "red"],
        default: "black"
    },
//color price: 
    price: {
        type: Number,
        min: 20,
        max: 60,
    },
});

module.exports = mongoose.model("ClothingModel", clothingSchema);
