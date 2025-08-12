const express = require('express');
const router = express.Router();
const Review = require('../models/review');
const {campgroundSchema , reviewSchema} = require('../schemas');
const ExpressError = require('../utils/ExpressError');
const { isLoggedIn , isAuthor , validateCampground }  = require('../middleware');
const campground = require('../controller/campground'); 
const multer  = require('multer')
const { storage } = require('../cloudinary');
const upload = multer({ storage })


router.route('/')
    .get( campground.index )
    .post( isLoggedIn , upload.array('image') ,validateCampground , campground.postCamp);
    


router.get('/new', isLoggedIn , campground.renderForm )

router.route('/:id')
    .get(campground.showCamp)
    .put( isAuthor , isLoggedIn , upload.array('image') ,validateCampground ,campground.updateCamp)
    .delete( isAuthor , isLoggedIn ,  campground.deleteCamp);


router.get('/:id/edit',isLoggedIn , isAuthor ,  campground.editCamp)




module.exports = router;