const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        min: 21,
    },
    favorite_color: {
        type: String,
    },
    img_url: {
        type: String,
    }
})

module.exports = User;