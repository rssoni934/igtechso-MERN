const { isValidObjectId } = require('mongoose');
const Reviews = require('../models/review.model');
const postReview = async (req, res) => {

    const { image, noOfStar, title, noOfStudentWatched } = req.body;
    console.log("req.body",req.body);
    try {
        const review = new Reviews({
            image, noOfStar, title, noOfStudentWatched
        })
        const response = await review.save();
        res.status(201).json({
            result: response
        })
    }
    catch (err) {
        console.log("Error:", err);
    }
};

const getReview = async (req, res) => {

    const { id } = req.params;
    console.log("is valid object id :::", isValidObjectId(id));
    try {

        const response = Reviews.findOne({
            _id: id
        });
        res.status(200).json({
            result: response,
            message: "Review fetched Successfully"
        })
    }
    catch (err) {
        console.log("Error:", err);
    }
};

const getAllReviews = async (req, res) => {

    const { postId } = req.body;
    try {
        const response = Reviews.find();
        res.status(200).json({
            result: response,
            message: "All the Reviews fetched Successfully"
        })
    }
    catch (err) {
        console.log("Error:", err);
    }
};

const softDeleteReview = async (req, res) => {

    const { id, postId } = req.body;
    try {
        res.status(200).json({
            result: response,
            message: "Review deleted Successfully"
        })
    }
    catch (err) {
        console.log("Error:", err);
    }
};

const updateReview = async (req, res) => {

    const { id } = req.body;
    try {

    }
    catch (err) {
        console.log("Error:", err);
    }
};

module.exports = {
    postReview: postReview,
    getReview: getReview,
    getAllReviews: getAllReviews,
    softDeleteReview: softDeleteReview,
    updateReview: updateReview
}