import React from 'react';
import symbol from 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

function User_nav() {
    return (
        <div>
    
            <div id="user_nav" class="sidenav">     //side navigation bar
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="#">Profile</a>
                <a href="#">Search</a>
                <a href="#">Enroll</a>
                <a href="#">Swap</a>
                <a href="#">Timetable</a>
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