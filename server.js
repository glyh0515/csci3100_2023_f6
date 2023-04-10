const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const methodOverride = require('method-override')

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
mongoose.connect('mongodb+srv://csci3100_2023_f6:La39HykFMfj2xPK5@cluster0.05afckq.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connection is an instance of the connected DB
const db = mongoose.connection;
// Upon connection failure
db.on('error', console.error.bind(console, 'connection error:'));
// Upon opening the database successfully
db.once('open', function () {
  console.log("Connection is open...");
  // Define a schema for a sample model
  const sampleSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });
  // Create a model based on the schema
  const Sample = mongoose.model('Sample', sampleSchema);
  
  // This module is for parsing the content in a request body (installed with npm)
  const bodyParser = require('body-parser');
  // Use parser to obtain the content in the body of a request
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body['_method'];
      delete req.body['_method'];
      return method;
    }
  }));

  // Define a route that creates a new sample document
  app.get('/create-sample', (req, res) => {
    Sample.create({
      name: "John Doe",
      age: 30
    });
    res.send("Document created!");
    console.log("Document created!");
  });

  app.all('/*', (req, res) => {
    res.status(404).redirect('http://localhost:3000/');
  });
});

// Start the server
const server = app.listen(8080);
