const mongoose = require('mongoose');

const users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        reuired: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
  })

module.exports = mongoose.model('Users',users);