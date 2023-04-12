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
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

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
  const UserSchema = mongoose.Schema({
    StudentID: { type: String, unique: true },
    Name: String,
    Email: String,
    Password: String,
    Major: String,
    Year: Number,
    EnrolledCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  const AdminSchema = mongoose.Schema({
    AdminID: { type: String, unique: true },
    Name: String,
    Email: String,
    Password: String,
  });
  const CourseSchema = mongoose.Schema({
    CourseID: { type: String, unique: true },
    CourseName: String,
    Timeslot: String,
    Venue: String,
    Instructor: String,
    Department: String,
    Units: Number,
    Vacancy: Number,
    EnrolledStudent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
  });
  // Create models based on the schema
  const User = mongoose.model('Student', UserSchema);
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
  app.get('/create-sample', (req, res) => {
    Course.create({
      CourseID: "CSCI3100",
      CourseName: "Software Engineering",
      Timeslot: "Friday 1030-1615",
      Venue: "Venue 3",
      Department: "Department of Compuer Science",
      Units: 6,
      Vacancy: 300,
    })
    res.send("Document created!");
  });

  app.get('/all-user', async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error.');
    }
  });

  app.get('/all-admin', async (req, res) => {
    try {
      const admins = await Admin.find({});
      res.status(200).json(admins);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error.');
    }
  });

  app.get('/all-course', async (req, res) => {
    try {
      const courses = await Course.find({});
      res.status(200).json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error.');
    }
  });

  app.post('/login', async (req, res) => {
    try {
      // Check if user exists in the database
      const user = await User.findOne({ Email: req.body.email });
      if (!user) {
        res.status(400).json({ message: 'Invalid email or password' });
      }
      // Check if the provided password is valid
      const validPassword = await bcrypt.compare(req.body.password, user.Password);
      if (!validPassword) {
        res.status(400).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      res.header('x-auth-token', token);

      // Redirect to the profile page on successful login
      res.redirect("http://localhost:3000/profile");
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error.');
    }
  });

  // Posting a register request for student
  app.post('/user/register', async (req, res) => {
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        StudentID: req.body['sid'],
        Name: req.body['name'],
        Email: req.body['email'],
        Password: hashedPassword,
        Major: req.body['major'],
        Year: req.body['year'],
      });
      res.status(200).json({ message: 'Student registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering the student' });
    }
  });

  app.post('/admin/register', async (req, res) => {
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await Admin.create({
        AdminID: req.body['adminID'],
        Name: req.body['name'],
        Email: req.body['email'],
        Password: hashedPassword,
      });
      res.status(200).json({ message: 'Student registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering the student' });
    }
  });

  app.delete('/user/:studentID', async (req, res) => {
    try {
      await User.findOneAndDelete({ StudentID: req.params['studentID'] });
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting the student' });
    }
  });

  app.delete('/admin/:adminID', async (req, res) => {
    try {
      await Admin.findOneAndDelete({ AdminID: req.params['adminID'] });
      res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting the admin' });
    }
  });

  app.delete('/course/:courseID', async (req, res) => {
    try {
      await Course.findOneAndDelete({ CourseID: req.params['courseID'] });
      res.status(200).json({ message: 'Course deleted successfully' });
      console.log(req.params['courseID'], "deleted!");
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting the course' });
    }
  });
});




  // Start the server
  const server = app.listen(8080);
