const express = require("express");
const router = express.Router();
const Formidable = require('formidable');
const cloudinary = require("cloudinary");

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
const Photo = require('../../Models/Photo');

router.post('/upload', async (req, res) => {
  const form = new Formidable();
    form.parse(req, (err, fields, files) => {
      cloudinary.uploader.upload(files.upload.path, result => {
          console.log(result)
        }
      );
    });
})


module.exports = router;