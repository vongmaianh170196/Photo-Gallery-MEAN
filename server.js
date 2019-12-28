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

// Set static folder
    app.use(express.static(path.join(__dirname, 'public')));
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));
  
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//   }
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`${port}`))