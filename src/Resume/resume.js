import React from 'react';
import './resume.css';
import $ from 'jquery';
import NavMenu from '../Navigation/nav_menu.js';

function Resume() {
    document.body.style.background = "#ffe6e6";
    $('title').html("Michaela - Resume");

    return (
        <div>
            <NavMenu />
            <div className="container-fluid mx-auto resume-page" style={{width: 2000 + 'px'}}>
                <h1 className="resume-title">My Resume</h1>
                <img className="resume-image" src="../Images/resume.jpg" alt="resume" />
            </div>
        </div>

    )
}

export default Resume;