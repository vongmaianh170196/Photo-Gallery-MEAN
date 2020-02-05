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
        res.json(newPhoto)
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

//Delete photto
router.delete('/:photo_id', auth, async (req, res) => {
  try {
    
    let photo = await Photo.findById(req.params.photo_id)
   
    //console.log(photo)
    // console.log(photo.user)
    // console.log(req.user.id)
    // console.log(photo.user !== req.user.id)
    //if(photo.user !== req.user.id) return res.status(400).json({msg: "You dont have the right to delete this photo"});
    await photo.remove();
    let photos = await Photo.find();  
    res.json(photos);
  } catch (error) {
    console.log(error)
  }
})

//Save photo
router.put('/saved/:photo_id', auth, async (req, res) => {
  try {
      const photo = await Photo.findById(req.params.photo_id)
      if(photo.savedBy.filter(save => save.user === req.user.id).length > 0)  return res.status(400).json({msg: "Photo is already saved"})
      photo.savedBy.unshift({user: req.user.id})
      await photo.save();
     
      const user = await User.findById(req.user.id);
      user.saved.unshift({photo: photo._id})
      await user.save();
      
      res.json(photo.savedBy);
  } catch (error) {
      console.log(error)
  }
});
//Unsave photo
router.put('/unsave/:photo_id', auth, async (req, res) => {
  try {
      const photo = await Photo.findById(req.params.photo_id)
      const removeIndex = photo.savedBy.map(save => save.user).indexOf(req.user.id);
      if(removeIndex < 0) return res.status(400).json({msg: "Photo is not saved yet"})
      photo.savedBy.splice(removeIndex, 1)
      await photo.save();
      
      const user = await User.findById(req.user.id);
      const unsavedIndex = user.saved.map(saved => saved.photo).indexOf(req.params.photo_id);
      user.saved.splice(unsavedIndex, 1)
      await user.save();
      
      res.json(photo.savedBy);
  } catch (error) {
      console.log(error)
  }
});


//Love photo
router.put('/loved/:photo_id', auth, async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.photo_id)
    if(photo.lovedBy.filter(love => love.user === req.user.id).length > 0)  return res.status(400).json({msg: "Photo is already loved"})
    photo.lovedBy.unshift({user: req.user.id})
    await photo.save();
    res.json(photo.lovedBy)
  } catch (error) {
      console.log(error)
  }
})
//Unlike
router.put('/unlove/:photo_id', auth, async (req, res) => {
  try {
      const photo = await Photo.findById(req.params.photo_id)
      const removeIndex = photo.lovedBy.map(love => love.user).indexOf(req.user.id);
      if(removeIndex < 0) return res.status(400).json({msg: "Photo is not liked yet"})
      photo.lovedBy.splice(removeIndex, 1)
      await photo.save();
      
      
      res.json(photo.lovedBy);
  } catch (error) {
      console.log(error)
  }
});
module.exports = router;
