const express = require("express");
const router = express.Router();
const config = require('config');
const IncomingForm = require('formidable').IncomingForm
const cloudinary = require("cloudinary");
const Photo = require('../../Models/Photo');
const User = require('../../Models/User');
const auth = require('../../middleware/auth');


cloudinary.config({
  cloud_name: config.get('cloudName'),
  api_key: config.get('cloudApiKey'),
  api_secret: config.get('cloudApiSecret')
});

//get photos
router.get('/', async(req, res) => {
  try {
   const photos = await Photo.find();
   res.json(photos);
  } catch (error) {
    console.log(error)
  }
 })


//Upload photo
router.post('/upload', auth , async (req, res) => {
  try {
    let photo = {};
    var form = new IncomingForm()
    let user = await User.findById(req.user.id)
    form.parse(req, function(err, fields, files) {
      if(fields.title === "") return res.status(400).json({msg: "Title cannot be empty"})
      photo.title = fields.title
      photo.caption = fields.caption
      //Post to cloudinary
      cloudinary.uploader.upload(files.path.path, async result => {
        //save to database
        photo.path = result.secure_url;
        photo.user = req.user.id;
        photo.by = user.username;
        photo.lovedBy = [];
        photo.savedBy =[];
        //Save new photo
        let newPhoto = new Photo(photo)
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

//Get photos by user
router.get('/:user_id', async (req, res) => {
  try {
    let photos = await Photo.find({user: req.params.user_id});
    res.json(photos)
  } catch (error) {
    console.log(error)
  }
})

//Get my photos
router.get('/my_photos',auth, async (req, res) => {
  try {
    let photos = await Photo.find({user: req.user.id});
    res.json(photos)
  } catch (error) {
    console.log(error)
  }
})
module.exports = router;
