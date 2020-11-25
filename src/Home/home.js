import React from 'react';
import './home.css';
import $ from 'jquery';
import NavMenu from '../Navigation/nav_menu.js';

function Home() {
    $('title').html("Michaela - Home");
    return (
        <div>
            <NavMenu />
            <header>
                <h1 className="home-title">Welcome!</h1>
            </header>
            <section>
                <img className="cat-gif" src="../Images/typing_gif.gif" alt="cat typing gif" />
            </section>
            <main className="code-container">
                <p className="code"> <span className="doctype">&lt;!DOCTYPE html&gt;</span><br />
                    <span className="html1">&lt;html&gt;</span><br />
                    <span className="head1">&lt;head&gt;</span><br />
                    <span className="profile"><span className="tags">&lt;title&gt;</span>Home<span className="tags">&lt;/title&gt;</span></span><br />
                    <span className="meta"><span className="tags">&lt;meta</span><span className="class"> name</span>=<span className="result">"viewport"</span> <span className="class">content</span>=<span className="result">"width=device-width, initial-scale=1"</span><span className="tags">&gt;</span></span><br />
                    <span className="head2">&lt;/head&gt;</span><br />
                    <span className="body1">&lt;body&gt;</span><br />
                    <span className="header1">&lt;header&gt;</span><br />
                    <span className="welcome"><span className="tags">&lt;h1</span> <span className="class">className</span>=<span className="result">"home-title"</span><span className="tags">&gt;</span>Welcome!<span className="tags">&lt;/h1&gt;</span></span><br />
                    <span className="header2">&lt;/header&gt;</span><br />
                    <span className="section1">&lt;section&gt;</span><br />
                    <span className="div1">&lt;div <span className="class">className</span>=<span className="result">"navigation-menu"</span>&gt;</span><br />
                    <span className="a1"><span className="tags">&lt;a</span> <span className="class">className</span>=<span className="result">"navigation-option"</span> <span className="class">href</span>=<span className="result">"/"</span><span className="tags">&gt;</span>Home<span className="tags">&lt;/a&gt;</span></span><br />
                    <span className="a2"><span className="tags">&lt;a</span> <span className="class">className</span>=<span className="result">"navigation-option"</span> <span className="class"> href</span>=<span className="result">"../about_me"</span><span className="tags">&gt;</span>About Me<span className="tags">&lt;/a&gt;</span></span><br />
                    <span className="a3"><span className="tags">&lt;a</span> <span className="class">className</span>=<span className="result">"navigation-option"</span> <span className="class"> href</span>=<span className="result">"../portfolio"</span><span className="tags">&gt;</span>Portfolio<span className="tags">&lt;/a&gt;</span></span><br />
                    <span className="a4"><span className="tags">&lt;a</span> <span className="class">className</span>=<span className="result">"navigation-option"</span> <span className="class">href</span>=<span className="result">"../resume"</span><span className="tags">&gt;</span>Resume<span className="tags">&lt;/a&gt;</span></span><br />
                    <span className="div2">&lt;/div&gt;</span><br />
                    <span className="img"><span className="tags">&lt;img <span className="class">className</span>=<span className="result">"cat-gif"</span> <span className="class">src</span>=<span className="result">"../Images/typing_gif.gif"</span> <span className="class">alt</span>=<span className="result">"cat typing gif"</span><span className="tags">/&gt;</span></span></span><br />
                    <span className="section2">&lt;/section&gt;</span><br />
                    <span className="body2">&lt;/body&gt;</span><br />
                    <span className="html2">&lt;/html&gt;</span><br />
                </p>
            </main>
        </div>
    );
}

export default Home;