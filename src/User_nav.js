import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/nav.css';
import { AiOutlineExport,AiOutlineMenu,AiOutlineCaretLeft,  //icon for top nav
    AiOutlineCalendar,AiOutlineSwap,AiOutlineFileSearch,    // icon for sidenav
    AiOutlinePlusSquare,AiOutlineUser 
    } from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';


function User_nav() { 
    const openNav = () => {
        const sideNav = document.getElementById('user_nav');
        sideNav.style.width = '200px';
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
            <a onClick={closeNav} className='closebtn' style={{ float: 'right', textAlign:'right' }}>
                <AiOutlineCaretLeft/>
            </a>           
            <NavLink to="/profile" onClick={closeNav}>
                <AiOutlineUser/> Profile 
            </NavLink>
            <NavLink to="/search" onClick={closeNav}>
                <AiOutlineFileSearch/> Search
            </NavLink>
            <NavLink to="/enroll" onClick={closeNav}>
                <AiOutlinePlusSquare/> Enroll
            </NavLink>
            <NavLink to="/swap" onClick={closeNav}>
                <AiOutlineSwap/> Swap
            </NavLink>
            <NavLink to="/WeeklyTimetable" onClick={closeNav}>
                <AiOutlineCalendar/> Timetable
            </NavLink>
        </div>

        <div className="topnav">
            <IconButton onClick={openNav} className='topnav_button'  style={{ float: 'left' }}>
                <AiOutlineMenu color="#bd4c4c"/>
            </IconButton>
            <span className='topnav_button'>CUSUCS</span>
            <IconButton onClick={handleLogout} className='topnav_button' style={{ float: 'right'}}>
                <AiOutlineExport color="#bd4c4c"/>
            </IconButton>
        </div>
    </div>
    );
}
export default User_nav;
