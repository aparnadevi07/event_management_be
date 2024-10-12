// server.js
const Event = require('./models/Event');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config(); // For using environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to Event Management Backend!');
});
// Use Routes
app.use('/api/events', require('./routes/event'));
app.use('/api/test', require('./routes/test'));



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
