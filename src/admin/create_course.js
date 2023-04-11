import React from 'react';
import Admin_nav from './Admin_nav';

function HandleSubmit() {
};

function CreateCourse() {
  return (
    <div>
    <Admin_nav />
        <form>
          <h1>Create Course</h1>
          <div>
            <label>Course Code</label>
            <input type="course_code"/>
          </div>
          <div>
            <label>Course Name</label>
            <input type="course_name" />
          </div>
          <div>
            <label>Time</label>
            <select type="day">
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </select>
            <input type="time" /><h>To</h><input type="time" />
          </div>
          <div>
            <label>Location</label>
            <input type="location" />
          </div>
          <div>
            <label>Instructor</label>
            <input type="instructor" />
          </div>
          <button type="submit" onClick={HandleSubmit}>Submit</button>
        </form>
    </div>
  );
}

export default CreateCourse;
