const express = require('express');
const router = express.Router({ mergeParams: true });
const ExpressError = require('../utils/ExpressError');
const {campgroundSchema , reviewSchema} = require('../schemas');
const { isLoggedIn , isReviewAuthor , validateReview }  = require('../middleware');
const review = require('../controller/review'); 


router.post('/' ,  isLoggedIn ,  validateReview , review.createReview)

router.delete('/:reviewId', isLoggedIn , isReviewAuthor ,review.deleteReview)






module.exports = router;