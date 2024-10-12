const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create a new event
router.post('/create', async (req, res) => {
  const { name, venue, decor } = req.body;

  try {
    const newEvent = new Event({ name, venue, decor });
    await newEvent.save();
    console.log('Event saved:', newEvent);  // Log saved event
    res.json(newEvent);
  } catch (err) {
    console.log('Error saving event:', err); // Log error if any
    res.status(500).send('Server Error');
  }
});

// Get all events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
