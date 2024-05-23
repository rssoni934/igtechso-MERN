const mongoose = require('mongoose');

const reviews = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    noOfStar: {
        type: Number,
        reuired: true
    },
    title: {
        type: String,
        required: true
    },
    noOfStudentWatched: {
        type: Number,
        required: true
    }

}, {
    timestamps: true,
})

module.exports = mongoose.model('Reviews', reviews);