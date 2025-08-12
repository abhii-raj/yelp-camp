const mongoose = require('mongoose');
const Review = require('./review');
const { ref } = require('joi');

const ImageSchema = new mongoose.Schema({
    url: String,
    filename: String
})

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const campgroundSchema = new mongoose.Schema(
    {
        title: String,
        images: [ImageSchema],
        price: String,
        description: String,
        location: String,
        author : { 
            type : mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }, 
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Review'
            }
        ]

    }
);


campgroundSchema.post('findOneAndDelete' , async function (doc) {
    if(doc){
        await Review.deleteMany({
            _id:{
                $in: doc.reviews
                //"Any _id that matches one inside the array doc.reviews."
            }
        })
    }
})

module.exports = mongoose.model('Campground' , campgroundSchema);