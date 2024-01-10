
const express = require('express');
const { Router } = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const User = require('../models/user.model');



app.use(cors({
  origin: 'http://127.0.0.1:8080', // Replace with your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Header', '*');
  next();
})
app.use((req, res, next) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    console.log('Raw data:', data);
    next();
  });
});

const fs = require('fs');
const uploadDir = './uploads';

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}


const multer = require('multer');

// Multer for video file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });


// Create an instance of Express router
const router = Router();

  router.post('/register', upload.single('video'), async (req, res) => {
    try {
        const user = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          videoPath: req.body.videoPath, // Assuming the video is optional
        });

        // Save the user to the database
        await user.save();
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error registering user', error: error.message });
    }
});


  console.log(module.paths);

  // export default router;
  module.exports = router;