import React from 'react';
import './about_me.css';
import $ from 'jquery';
import NavMenu from '../Navigation/nav_menu.js';

function AboutMe() {
    document.body.style.background = "#ffe6f3";
    $('title').html("Michaela - About Me");

      return (
            <div className="about-me-page">
                <NavMenu />
                <div className="about-me-container container mx-auto">
                    <h1 className="about-me-title ">About Me:</h1>  
                    <img className="me" src="Images/me.jpg" alt="picture of me" />
                    <section className="contact-container">
                        <h3 className="contact-title">Contact Me:</h3>
                        <a href="mailTo: bekkerman88@gmail.com"><i className="material-icons email-icon">forward_to_inbox</i></a>
                        <p className="email">Email: bekkerman88@gmail.com</p>
                        <p className="phone">Phone: 818 300 8013</p>
                    </section>
                    <section>
                        <p className="introduction">Hi! My name is Michaela Bekkerman and I am a <span className="profession">Web Developer.</span> I recieved my Associates (AA) Degree in Psychology from Los Angeles Valley College. Unsure about what I wanted to do, I took time off from school and worked several retail jobs in the meantime. <a className="resume-link" href="/resume"> Click here to see my resume.</a> I came across web development and fell in love with it. With the help of Team Treehouse, Google, and Youtube, I was able to learn to code. <a className="portfolio-link" href="/portfolio">Check out my projects.</a></p>
                    </section> 
                    <section className="skills-container">
                        <p>Skills:</p>
                        <ul className= "languages">
                            <li className="skill">HTML</li>
                            <li className="skill">CSS</li>
                            <li className="skill">BOOTSTRAP</li>
                            <li className="skill">JAVASCRIPT</li>
                            <li className="skill">JQUERY</li>
                            <li className="skill">REACT/REDUX</li>
                            <li className="skill">AJAX</li>
                            <li className="skill">REST API</li>
                            <li className="skill">NODE JS</li>
                            <li className="skill">MYSQL</li>
                            <li className="skill">JSON</li>
                        </ul> 
                    </section>
                </div>
            </div>
        
      );
  }
  
  export default AboutMe;