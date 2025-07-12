const express = require('express');
const Bug = require('../models/Bug');
const router = express.Router();

router.get('/', async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const newBug = new Bug({ title, description });
  await newBug.save();
  res.status(201).json(newBug);
});

router.put('/:id', async (req, res) => {
  const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bug);
});

router.delete('/:id', async (req, res) => {
  await Bug.findByIdAndDelete(req.params.id);
  res.json({ message: 'Bug deleted' });
});

module.exports = router;

// == BACKEND: middleware/errorHandler.js ==
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error', error: err.message });
}

module.exports = errorHandler;