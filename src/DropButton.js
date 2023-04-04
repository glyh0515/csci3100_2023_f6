import React, { useState } from 'react';
import './CSS/DropdownButton.css';

function DropButton() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>2022-2023Term1&#9660;</button>
      {dropdownVisible && (
        <div className="dropdown-content">
          <a href="#">2022-2023Term2</a>
          <a href="#">2021-2022Term2</a>
          <a href="#">2021-2022Term1</a>
        </div>
      )}
    </div>
  );
}

export default DropButton;
