const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

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
app.use(express.json());

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
  // Define schemas for sample models
  const StudentSchema = mongoose.Schema({
    StudentID: { type: String, unique: true },
    Name: String,
    Email: String,
    Password: String,
    Major: String,
    Year: Number,
    EnrolledCourse: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  });
  const AdminSchema = mongoose.Schema({
    AdminID: { type: String, unique: true },
    Name: String,
    Email: String,
    Password: String,
  });
  const CourseSchema = mongoose.Schema({
    ClassNumber: { type: String, unique: true },
    CourseID: String,
    CourseName: String,
    Timeslot: String,
    Date: String,
    Venue: String,
    Department: String,
    Units: Number,
    Vacancy: Number,
    EnrolledSturent: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
  });
  // Create models based on the schema
  const Student = mongoose.model('Student', StudentSchema);
  const Admin = mongoose.model('Admin', AdminSchema);
  const Course = mongoose.model('Course', CourseSchema);

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
  app.post('/create-sample', (req, res) => {
    Student.create({
      StudentID: 1155000000,
      Name: "Hi",
      Email: "hi@test.com",
      Password: "abcd1234",
      Major: "Loser",
      Year: 2
    })
    res.send("Document created!");
  });

  // Posting a register request for student
  app.post('/register', (req, res) => {
    Student.create({
      StudentID: req.body['sid'],
      Name: req.body['name'],
      Email: req.body['email'],
      Password: req.body['password'],
      Major: req.body['major'],
      Year: req.body['year']
    })
    res.redirect("http://localhost:3000/login");
  });
  
  app.get('/*', (req, res) => {
    res.redirect("http://localhost:3000/login");
  });
});

// Start the server
const server = app.listen(8080);
