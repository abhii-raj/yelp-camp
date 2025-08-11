const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');
const Review = require('../models/review');
const {campgroundSchema , reviewSchema} = require('../schemas');
const ExpressError = require('../utils/ExpressError');
const { isLoggedIn , isAuthor , validateCampground }  = require('../middleware');


router.get('/', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds })
});

router.get('/new', isLoggedIn ,(req, res) => {
    res.render('campgrounds/new');
})

router.post('/', isLoggedIn , validateCampground ,async (req, res ) => {
    
    const campground = new Campground(req.body.campground);
    campground.author = req.user._id;
    await campground.save();
    req.flash("success" , " created a campground ");
    res.redirect(`/campgrounds/${campground._id}`)
})

router.get('/:id',  async (req, res,) => {
    const campground = await Campground.findById(req.params.id).populate({
        path :'reviews',
        populate :{
            path: 'author'
        }}).populate('author');
    if(!campground){
        req.flash("error" , " Cant find the campground ");
        return res.redirect('/campgrounds');
    }
    console.log(campground);
    res.render('campgrounds/show', { campground });
});

router.get('/:id/edit',isLoggedIn , isAuthor ,  async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    
    if(!campground){
        req.flash("error" , " Cant find the campground ");
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { campground});
})

router.put('/:id', isAuthor , isLoggedIn ,  validateCampground ,async (req, res) => {
    const { id } = req.params;
   
    const camp = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    req.flash("success" , " updated a campground ");
    res.redirect(`/campgrounds/${camp.id}`)
});



router.delete('/:id', isAuthor , isLoggedIn ,  async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
     req.flash("success" , " successfully deleted a campground ");
    res.redirect('/campgrounds');
})



module.exports = router;