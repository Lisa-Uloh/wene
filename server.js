const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const bcrypt = require('bcryptjs');
//const UserRoutes = require('../your-project-name/src/routes/user.routes'); 
const UserRoutes = require('./routes/user.routes');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

const mongoDBUri = 'mongodb+srv://lisaedidiong:Lisa%402023@cluster0.cc6idnu.mongodb.net/Julens';
  
  mongoose.connect(mongoDBUri).then(() => {
      console.log('Successfully connected to MongoDB.');
  }).catch(err => {
      console.error('Connection error:', err.message);
  });
  
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/api/db-status', (req, res) => {
  if(mongoose.connection.readyState === 1) {
      res.send('Connected to MongoDB');
  } else {
      res.send('Not connected to MongoDB');
  }
});
app.use('/api', UserRoutes)

app.use((req,res,next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Header', '*');
  next();
})

// Registration endpoint


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
