import React from 'react';

function CreateAdmin() {
  return (
      <form>
        <h2>CREATE ADMIN</h2>
        <div>
          <input type="email" placeholder="Enter the email" />
        </div>
        <div>
          <input type="password" placeholder="Enter the password" />
        </div>
        <button type="submit">Create</button>
      </form>
  );
}

export default CreateAdmin;
