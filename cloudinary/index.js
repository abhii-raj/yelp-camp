const cloudinary = require('cloudinary').v2; // Use CommonJS require and .v2
const { CloudinaryStorage } = require('multer-storage-cloudinary'); // Import CloudinaryStorage

    // Configuration
cloudinary.config({ 
    cloud_name: process.env.NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.SECRET // Click 'View API Keys' above to copy your API secret
});
    
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'yelpcamp',
    allowedFormats: ['png' , 'jpg' , 'jpeg']
  },
});
 

module.exports = {
    cloudinary,
    storage
};