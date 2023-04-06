import React from 'react';
import Admin_nav from './Admin_nav';

function CreateAdmin() {
  return (
    <div>
      <Admin_nav />
      <form>
        <h2>CREATE ADMIN</h2>
        <div>
          <input type="email" placeholder="Enter the email" />
        </div>
        <div>
          <input type="password" placeholder="Enter the password" />
        </div>
        <div>
          <input type="password" placeholder="Confirm the password" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateAdmin;
