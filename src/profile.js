import React, { useState } from 'react';
import User_nav from './User_nav'; // import the User_nav component
import './CSS/ProfilePage.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Chan Tai Man',
    email: 'SID@link.cuhk.edu.hk',
    sid: '123456789',
    major: 'Computer Science',
    year: '3',
  });

  const [courses, setCourses] = useState([
    { code: 'CSCI3100', name: 'Software Engineering' },
    { code: 'CS102', name: 'Data Structures' },
    { code: 'CS103', name: 'Algorithms' },
  ]);

  const handleDropCourse = (courseIndex) => {
    setCourses(courses.filter((_, index) => index !== courseIndex));
  };

  return (
    <div>
      <User_nav /> 
      <div className="profile-page">
        <div className="left-column">
          <h3>Profile</h3>
          <img
            className="profile-picture"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h4>Personal Information</h4> 
          <ul className="personal-info">
            <li>Name: {profile.name}</li>
            <li>Email: {profile.email}</li>
            <li>Student ID: {profile.sid}</li>
            <li>Major: {profile.major}</li>
            <li>Year: {profile.year}</li>
          </ul>
        </div>
        <div className="main-content">
          <h3>Enrolled Courses</h3>
          <ul className="course-list">
            {courses.map((course, index) => (
              <li key={course.code} className="course-item">
                <span className="course-code">{course.code}</span>
                <span className="course-name">{course.name}</span>
                <button
                  className="drop-course-btn"
                  onClick={() => handleDropCourse(index)}
                >
                  Drop
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
