const express = require("express");
const router = express.Router();
const IncomingForm = require('formidable').IncomingForm
const cloudinary = require("cloudinary");
const Photo = require('../../Models/Photo');

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

router.post('/upload', async (req, res) => {
  try {
    let photo = {};
    var form = new IncomingForm()
    form.parse(req, function(err, fields, files) {
      photo.caption = fields.caption
      //Post to cloudinary
      cloudinary.uploader.upload(files.path.path, async result => {
        //save to database
        photo.path = result.secure_url;
        //Save new photo
        let newPhoto = await new Photo(photo)
        await newPhoto.save();
        res.json(photo)
      }, 
        {
          secure: true,
          //To a specific folder
          folder: 'my-gallery-mean' 
        }
      );  
    });
  } catch (error) {
    console.log(error.message)
  }
});
router.get('/', async(req, res) => {
 try {
  const photos = await Photo.find();
  res.json(photos);
 } catch (error) {
   console.log(error)
 }
})



module.exports = router;
