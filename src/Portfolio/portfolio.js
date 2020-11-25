import React, {Component} from 'react';
import $ from 'jquery';
import NavMenu from '../Navigation/nav_menu.js';
import './portfolio.css';

class Portfolio extends Component {
    constructor() {
        super();
    }

    render() {
        document.body.style.background = "#ed7878";
        $('title').html("Michaela - Portfolio");
        return (
            <div>
                <span className="darken-background"></span>
                <NavMenu />
                <div className="container-fluid mx-auto portfolio-page" style={{width:2500 + 'px'}}>
                    <div>
                        <h1 className="portfolio-title">My Portfolio</h1>
                    </div>
                    <div className="projects-container">
                        <img className="portfolio-image" src="../Images/quotes_mockup.png" />
                        <img className="portfolio-image" src="../Images/new_york_mockup.png" />
                        <img className="portfolio-image" src="../Images/art_page_mockup.png" />
                    </div>
                    <div className="d-flex flex-row justify-content-around" id="btnContainer">
                        <div className= "d-flex flex-row">
                            <button className="vid-option-btn" onClick={() => {
                                $('.quotes-video-container').css('display', 'block');
                                $('.darken-background').css('display', 'block');
                        }}>Watch clip of site</button>
                            <a href="https://quotes-site.herokuapp.com/" target="_blank"><button className="site-option-btn">View Site</button></a>
                        </div>
                        <div className= "d-flex flex-row">
                            <button className="vid-option-btn" onClick={() => {
                                $('.new-york-video-container').css('display', 'block');
                                $('.darken-background').css('display', 'block');
                        }}>Watch clip of site</button>
                            <a href="https://new-york-site.herokuapp.com/" target="_blank"><button className="site-option-btn">View Site</button></a>
                        </div>
                        <div className= "d-flex flex-row">
                            <button className="vid-option-btn" onClick={() => {
                                $('.art-video-container').css('display', 'block');
                                $('.darken-background').css('display', 'block');
                        }}>Watch clip of site</button>
                            <a href="https://art-crafts-site.herokuapp.com/" target="_blank"><button className="site-option-btn">View Site</button></a>
                        </div>
                    </div>
                    <div className="tools-container">
                        <p>What I used:</p>
                        <ul className="quotes-tools">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>Node JS</li>
                            <li>MySQL</li>
                        </ul>
                        <p>What I used:</p>
                        <ul className="new-york-tools">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>Jquery</li>
                        </ul>
                        <p>What I used:</p>
                        <ul className="art-tools">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>React + Redux</li>
                            <li>Javascript</li>
                            <li>Node JS</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                    <div className="quotes-video-container">   
                        <i className="material-icons close-window" id="quotesClose" onClick={(e) => {
                            $(e.target).parent().css('display', 'none');
                            $('.darken-background').css('display', 'none');
                        }}>close</i>
                        <video className="quotes-video" src='../Videos/quotes_recording.mp4' autoPlay controls />
                    </div>
                    <div className="new-york-video-container">   
                        <i className="material-icons close-window" id="newYorkClose" onClick={(e) => {
                            $(e.target).parent().css('display', 'none');
                            $('.darken-background').css('display', 'none');
                        }}>close</i>
                        <video className="new-york-video" src='../Videos/new_york_recording.mp4' autoPlay controls />
                    </div>
                    <div className="art-video-container">   
                        <i className="material-icons close-window" id="artClose" onClick={(e) => {
                            $(e.target).parent().css('display', 'none');
                            $('.darken-background').css('display', 'none');
                        }}>close</i>
                        <video className="art-video" src='/../Videos/art_recording.mp4' autoPlay controls />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;