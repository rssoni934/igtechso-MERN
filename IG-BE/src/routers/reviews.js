const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviews.controller');

router.route("/submit").post(reviewController.postReview);
router.route("/getreview/:id").get(reviewController.getReview);
router.route("/getallreview").get(reviewController.getAllReviews);
router.route("/deletereview/:id").delete(reviewController.softDeleteReview);
router.route("/updatereview/:id").patch(reviewController.updateReview);


module.exports = router;