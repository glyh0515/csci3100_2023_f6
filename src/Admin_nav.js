import React from 'react';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
import 'nav';


function User_nav() {
    return (
        <div>
    
            <div id="admin_nav" class="sidenav">    //side navigation bar
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="#">Profile</a>
                <a href="#">Create Admin</a>
                <a href="#">View All Users</a>
                <a href="#">View All Courses</a>
                <a href="#">Create Course Record</a>
            </div>
            
            <div class="topnav">                    //top navigation bar 
            <span onclick="openNav()" style="cursor: pointer; float: left;" >&#9776;</span> 
            CUSUCS
            <span onclick="" style="float: right;cursor: pointer;">Logout</span>
            
            </div>
        
        </div>
           
    );
}
export default User_nav;