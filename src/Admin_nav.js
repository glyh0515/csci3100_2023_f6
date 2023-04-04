import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/nav.css';


function Admin_nav() { 
    const openNav = () => {
        const sideNav = document.getElementById('admin_nav');
        sideNav.style.width = '250px';
    };

    const closeNav = () => {
        const sideNav = document.getElementById('admin_nav');
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
        <div id="admin_nav" className="sidenav">
            <a  className="closebtn" onClick={closeNav} style={{ cursor: 'pointer'}}>
            x
            </a>
            <NavLink to="/admin_profile" onClick={closeNav}>
                Profile
            </NavLink>
            <NavLink to="/create_admin" onClick={closeNav}>
                Create Admin
            </NavLink>
            <NavLink to="/all_user" onClick={closeNav}>
                View All Users
            </NavLink>
            <NavLink to="/all_course" onClick={closeNav}>
                View All Courses
            </NavLink>
            <NavLink to="/create_course" onClick={closeNav}>
                Create Course Record
            </NavLink>
        </div>

        <div className="topnav">
            <span onClick={openNav} style={{ cursor: 'pointer', float: 'left' }}>
            &#9776;
            </span>
            CUSUCS
            <span onClick={handleLogout} style={{ float: 'right', cursor: 'pointer' }}>
            Logout
            </span>
        </div>
    </div>
    );
}
export default Admin_nav;