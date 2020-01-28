const express = require('express');
const connectDb = require('./config/db');
const path = require('path');
const cors = require('cors');
const formidable = require('formidable');


const app = express();

//Middleware
app.use(cors());
app.use(express.json({
    extended: false
}));



//Connect to Db
connectDb();

//Define routes
app.use('/api/photos', require('./routes/api/photo'));
app.use('/api/user', require('./routes/api/user'));

// Set static folder
    app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`${port}`))