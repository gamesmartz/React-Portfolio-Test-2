import React from 'react';
import goldenHorizon from '../assets/img/gold-horizons-large-36.jpg';


export default props => {
    return (
        <div>
            <div id="navbar-target" className="container-fluid index-nav navbar">
                <ul className="nav hidden-nav d-flex fixed-top align-items-center justify-content-end nav-bar-shrink">
                    <li className="nav-item">
                        <a className="nav-link  active" href="#header-target">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#portfolio">Portfolios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <header id="header-target" className="header-style">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 my-auto text-center text-white">
                            <div className="header-title">Matt Norkaitis</div>
                            <div className="masthead-subtitle">3d Modeler / Photoshop Artist / Front-End Developer</div>
                        </div>
                    </div>
                </div>
                <div className="scroll-down d-flex justify-content-center align-items: center">
                    <a className="btn js-scroll-trigger" href="#about">
                        <i className="fas fa-angle-down"></i>
                    </a>
                </div>
            </header>

            <div className="page-section" id="about">
                <div className="container container-me">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={goldenHorizon} className="img-fluid rounded my-5" alt="painting-golden-horizon"/>
                        </div>
                        <div className="col-lg-6 text-center my-auto">
                            <h1>Hi, I'm Matt Norkaitis</h1>
                            <p>I am a 3d modeler, photoshop artist and front-end developer living in Irvine Ca. All the images and content on this site are my own. I have 15+ years experience in 3d modeling and photoshop. I also have front end developement experience. Thanks for visting my site, much appreciated!</p>
                            <p>About me: I'm current developing a learning tool for kids as well as running the technical aspects of a furniture company my partner and I started 8 years ago, growing the company from nothing to the largest privately owned furniture company in Orange County.</p>
                            <p>I am also a single father who has raised his son from 1 years old to 14 solo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}