import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/nav.css';
import { AiOutlineLogout } from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';


function User_nav() { 
    const openNav = () => {
        const sideNav = document.getElementById('user_nav');
        sideNav.style.width = '250px';
    };

    const closeNav = () => {
        const sideNav = document.getElementById('user_nav');
        sideNav.style.width = '0px';
    };


    const handleLogout = () => {
        const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
        // handle logout logic here
        // e.g. call API to invalidate session token, clear local storage/cookies, etc.
        window.location.replace('/');
    }
    };

    return (
    <div>
        <div id="user_nav" className="sidenav">
            <a  className="closebtn" onClick={closeNav} style={{ cursor: 'pointer'}}>
            x
            </a>
            <NavLink to="/profile" onClick={closeNav}>
                Profile
            </NavLink>
            <NavLink to="/search" onClick={closeNav}>
                Search
            </NavLink>
            <NavLink to="/enroll" onClick={closeNav}>
                Enroll
            </NavLink>
            <NavLink to="/swap" onClick={closeNav}>
                Swap
            </NavLink>
            <NavLink to="/WeeklyTimetable" onClick={closeNav}>
                Timetable
            </NavLink>
        </div>

        <div className="topnav">
            <span onClick={openNav} style={{ cursor: 'pointer', float: 'left' }}>
            &#9776;
            </span>
            CUSUCS
            <IconButton onClick={handleLogout} style={{ float: 'right', cursor: 'pointer' }}>
                <AiOutlineLogout color="#bd4c4c"/>
            </IconButton>
        </div>
    </div>
    );
}
export default User_nav;
