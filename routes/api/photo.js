const express = require("express");
const router = express.Router();
const formidable = require('formidable');
const cloudinary = require("cloudinary");

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
const Photo = require('../../Models/Photo');

router.post('/upload', function (req, res){
  const form = new formidable.IncomingForm();

      form.parse(req, function(err, fields, files) {
        console.log(fields)
        res.json(files)
      });
      
  // form.on('fileBegin', function (name, file){
  //     file.path = __dirname + '/uploads/' + file.name;
  // });

  // form.on('file', function (name, file){
  //     console.log(file)
  // });

});

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