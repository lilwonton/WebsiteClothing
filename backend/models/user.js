// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    // Simple declaration of datatype that will be used:
    name: String,
    // You can add specifics to each one too that help with validation, like making something required, or unique

    email: {
        type: String,
        required: true,
        unique: true
    },

});


module.exports = mongoose.model("UserModel", userSchema);
