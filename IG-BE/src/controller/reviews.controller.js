const { isValidObjectId } = require("mongoose");
const Reviews = require("../models/review.model");
const postReview = async (req, res) => {
  const { image, noOfStar, title, noOfStudentWatched } = req.body;
  try {
    const review = new Reviews({
      image,
      noOfStar,
      title,
      noOfStudentWatched,
    });
    const response = await review.save();
    res.status(201).json({
      result: response,
    });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({
        error: err
    })
  }
};

const getReview = async (req, res) => {
  const { id } = req.params;
  console.log("is valid object id :::", isValidObjectId(id));
  try {
    const response = await Reviews.findById(id);
    res.status(200).json({
      result: response,
      message: "Review fetched Successfully",
    });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({
        error: err
    })
  }
};

const getAllReviews = async (req, res) => {
  try {
    const response = await Reviews.find();
    res.status(200).json({
      result: response,
      message: "All the Reviews fetched Successfully",
    });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({
        error: err
    })
  }
};

const softDeleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Reviews.findByIdAndDelete(id);
    res.status(200).json({
      result: response,
      message: "Review deleted Successfully",
    });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({
        error: err
    })
  }
};

const updateReview = async (req, res) => {
  const { image, noOfStar, title, noOfStudentWatched } = req.body;
  const { id } = req.params;
  try {
    const response = await Reviews.findByIdAndUpdate(id, {
      image,
      noOfStar,
      title,
      noOfStudentWatched,
    });
    res.status(200).json({
      result: response,
      message: "Review updated Successfully",
    });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({
        error: err
    })
  }
};

module.exports = {
  postReview: postReview,
  getReview: getReview,
  getAllReviews: getAllReviews,
  softDeleteReview: softDeleteReview,
  updateReview: updateReview,
};
