const express = require("express");
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
const IncomingForm = require('formidable').IncomingForm
const cloudinary = require("cloudinary");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../Models/User');
const Photo = require("../../Models/Photo")
const auth = require('../../middleware/auth');


cloudinary.config({
    cloud_name: config.get('cloudName'),
    api_key: config.get('cloudApiKey'),
    api_secret: config.get('cloudApiSecret')
  });

//Load existing user if already log in
router.get('/auth', auth, async (req, res) => {
    try {
       
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server err")
    }
});

//Post api/user
//Desc register user
router.post('/register', async (req, res) => {
    //Validate using express
    //See if user existed 
   
    try{
        var form = new IncomingForm()
        form.parse(req, async function(err, fields, files) {
            let user = await User.findOne({username: fields.username});
            if (user){
               return res.status(400).json({errors: [{msg: "User is already existed"}]})
            }
        
            if(fields.username === "") return res.status(400).json({msg: "Username cannot be empty"})
            if(fields.password === "") return res.status(400).json({msg: "Password cannot be empty"})
            let newUser = {};
            newUser.username = fields.username;
            //Encrypt password
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(fields.password, salt);
            //Post to cloudinary
            if(files.avatar){
                cloudinary.uploader.upload(files.avatar.path, async result => {
                    //save to database
                    newUser.avatar = result.secure_url;
                   
                    //Save new user
                    let register = new User(newUser)
                    await register.save();
                    //return jsonwebtoken
                    const payload = {
                        user: {
                            id: register.id
                        }
                    }
                    jwt.sign(
                        payload, 
                        config.get('jwtsecret'),
                        {expiresIn: 36000},
                        (err, token) => {
                            if(err) return err;
                            res.json({token})
                        }
                    );
        
                }, 
                    {
                    secure: true,
                    //To a specific folder
                    folder: 'my-gallery-mean' 
                    }
                ); 
            }
            else{
                let register = new User(newUser)
                await register.save();
                //return jsonwebtoken
                const payload = {
                    user: {
                        id: register.id
                    }
                }
                jwt.sign(
                    payload, 
                    config.get('jwtsecret'),
                    {expiresIn: 36000},
                    (err, token) => {
                        if(err) return err;
                        res.json({token})
                    }
                );
            }
        });
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Server error")
    }

    
});

//Login user
router.post('/login', 
//Validate using express
[
    check('username', 'Please enter a username').not().isEmpty(),
    check('password', 'Password required').exists()
], 

async (req, res) => {
    //Validate using express
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()})
    }
    const {username, password} = req.body;

    try{
        //See if user existed 
        let user = await User.findOne({username});
        if (!user){
           return res.status(400).json({errors: [{msg: "Invalid credential"}]})
        }

        
    //return jsonwebtoken
        //check password
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({errors: [{msg: "Invalid credential"}]})
        }

        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(
            payload, 
            config.get('jwtsecret'),
            {expiresIn: 360000},
            (err, token) => {
                if(err) return err;
                res.json({token})
            }
        );
        
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Server error")
    }

    
});

//Save photo
router.put('/saved/:photo_id', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const photo = await Photo.findById(req.params.photo_id)
        user.saved.unshift({path: photo.path});
        await user.save();
        res.json(user.saved);
    } catch (error) {
        console.log(error)
    }
});
//Get saved photos
router.get('/:user_id/saved', async(req, res) => {
    try {
        const user = await User.findById(req.params.user_id);
        res.json(user.saved)
    } catch (error) {
       console.log(error) 
    }
})

//Love photo
router.put('/loved/:photo_id', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const photo = await Photo.findById(req.params.photo_id)
        user.loved.unshift({path: photo.path});
        photo.lovedBy.unshift({username: user.username})
        await user.save();
        res.json(user.loved);
    } catch (error) {
        console.log(error)
    }
})
//Get liked photos
router.get('/:user_id/loved', async(req, res) => {
    try {
        const user = await User.findById(req.params.user_id);
        res.json(user.loved)
    } catch (error) {
       console.log(error) 
    }
})
module.exports = router;