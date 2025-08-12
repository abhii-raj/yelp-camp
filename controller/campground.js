const Campground = require('../models/campground');


module.exports.index = async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds })
}

module.exports.renderForm = (req, res) => {
    res.render('campgrounds/new');
}

module.exports.postCamp = async (req, res ) => {    
    const campground = new Campground(req.body.campground);
    campground.author = req.user._id;
    await campground.save();
    req.flash("success" , " created a campground ");
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.showCamp = async (req, res,) => {
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
}

module.exports.editCamp = async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    
    if(!campground){
        req.flash("error" , " Cant find the campground ");
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { campground});
}

module.exports.updateCamp = async (req, res) => {
    const { id } = req.params;
   
    const camp = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    req.flash("success" , " updated a campground ");
    res.redirect(`/campgrounds/${camp.id}`)
}

module.exports.deleteCamp = async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
     req.flash("success" , " successfully deleted a campground ");
    res.redirect('/campgrounds');
}