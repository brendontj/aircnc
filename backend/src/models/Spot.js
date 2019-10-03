const mongoose = require('mongoose')

// Creating Schema to Spot
const SpotSchema = new mongoose.Schema({
    thumbnail : String, 
    company : String,
    price : Number,
    techs: [ String ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot', SpotSchema);