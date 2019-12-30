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
    let photo = new Photo();
    var form = new IncomingForm()
    await form.parse(req, function(err, fields, files) {
      photo.caption = fields.caption
      //Post to cloudinary
      cloudinary.uploader.upload(files.path.path, result => {
        //save to database
        photo.path = result.url;
        //Save new photo
        photo.save();
        res.json(photo)
      });  
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

// router.post('/upload', async (req, res) => {
//   const form = await new formidable.IncomingForm();

//   form.parse(req, function(err, fields, files) {
//     console.log(files)
//     res.json(files)
//   });
//     //   , (err, fields, files) => {
//     //   console.log(files);
//     //   console.log(fields)
//     //     // cloudinary.uploader.upload(files.link.path, result => {

//     //     //     console.log(result)
//     //     //     if (result.public_id) {
//     //     //         res.writeHead(200, { 'content-type': 'text/plain' });
//     //     //         res.write('received upload:\n\n');
//     //     //         res.end(util.inspect({ fields: fields, files: files }));
//     //     //     }
//     //     // }
//     //     // );
//     // });

// })


module.exports = router;