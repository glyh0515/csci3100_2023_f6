const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const app = express();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
})

app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for a sample model
const sampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a model based on the schema
const Sample = mongoose.model('Sample', sampleSchema);

// Define a route that creates a new sample document
app.get('/create-sample', async (req, res) => {
  try {
    const sample = new Sample({
      name: 'John Doe',
      age: 30,
    });

    await sample.save();

    res.send('Sample created!');
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

// Start the server
const server = app.listen(8080, () => {
  console.log('Server started on port 8080');
});

// Set up graceful shutdown for the server
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server shut down gracefully');
  });
});

app.all('/*', (req, res) => {
    res.status(404).redirect('http://localhost:3000/');
});