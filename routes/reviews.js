const express = require("express")
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js")
const wrapAsync = require("../utils/wrapAsync.js")
const Review = require("../models/review.js")
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js")
const reviewController = require("../controllers/reviews.js")




//---------------------------------------Reviews Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview))

//--------------------------------------Reviews Delete Route  // listing sai bhi delete ho aur review sai bhi delete ho jaye
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview))

module.exports = router;