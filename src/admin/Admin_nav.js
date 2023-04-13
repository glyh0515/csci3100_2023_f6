import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/nav.css';
import { AiOutlineExport,AiOutlineMenu,AiOutlineCaretLeft,  //icon for top nav
    AiOutlineUser,AiOutlineSolution,AiOutlineUserAdd,      // icon for sidenav
    AiOutlineHdd,AiOutlineReconciliation
     } from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';


function Admin_nav() { 
    const openNav = () => {
        const sideNav = document.getElementById('admin_nav');
        sideNav.style.width = '280px';
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
        window.location.replace('/login');
    }
    };

    return (
    <div>
        <div id="admin_nav" className="sidenav">
            <a onClick={closeNav} className='closebtn' style={{ float: 'right', textAlign:'right' }}>
                <AiOutlineCaretLeft/>
            </a> 
            <NavLink to="/admin_profile" onClick={closeNav}>
                <AiOutlineUser/>Profile 
            </NavLink>
            <NavLink to="/create_admin" onClick={closeNav}>
                <AiOutlineUserAdd/>Create Admin
            </NavLink>
            <NavLink to="/all_user" onClick={closeNav}>
                <AiOutlineSolution/>View All Users
            </NavLink>
            <NavLink to="/all_course" onClick={closeNav}>
                <AiOutlineHdd/>View All Courses
            </NavLink>
            <NavLink to="/create_course" onClick={closeNav}>
                <AiOutlineReconciliation/>Create Course
            </NavLink>
        </div>

        <div className="topnav">
            <IconButton onClick={openNav} className='topnav_button'  style={{ float: 'left' }}>
                <AiOutlineMenu color="#865344"/>
            </IconButton>
            <span className='topnav_button'>CUSUCS</span>
            <IconButton onClick={handleLogout} className='topnav_button' style={{ float: 'right'}}>
                <AiOutlineExport color="#865344"/>
            </IconButton>
        </div>
    </div>
    );
}
export default Admin_nav;
