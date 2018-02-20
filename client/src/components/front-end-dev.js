import React, { Component } from 'react';

import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Footer from './footer';

import caribbeanConnect from '../assets/img/caribbean-connect-4.jpg';
import memoryMatch from '../assets/img/memory-match.jpg';
import dateNite from '../assets/img/date-nite.jpg';
import StarTrekCalculator from '../assets/img/star-trek-calculator.jpg';

import MaterialIcon from 'react-google-material-icons'


class FrontEnd extends Component {
componentWillMount () {
    scroll(0, 0);
}

render () {
    return (

        <div>
            <div className="container-fluid">
                <ul className="nav d-flex fixed-top align-items-center justify-content-end nav-bar-shrink">
                    <li className="nav-item">
                        <Link to="/">
                            {/*<a className="nav-link active" href="index.html">Home</a>*/}
                        </Link>
                    </li>
                </ul>
            </div>

            <section className="page-section">

                <div className="container text-center position-relative">

                    <h2 className="thick-bold-raleway">Front End Development</h2>
                    <Link to="/modeling">
                        <div className="portfolio-chevron-left" ><MaterialIcon icon="chevron_left" size={70}/></div>
                    </Link>
                    <Link to="/photo-manipulation-photoshop">
                        <div className="portfolio-chevron-right" ><MaterialIcon icon="chevron_right" size={70}/></div>  
                    </Link>

                    <div className="portfolio-piece mix identity" title="Caribbean Connect 4">
                        <div className="portfolio-wrapper">
                            <img className="width-100" src={caribbeanConnect} alt="Caribbean Connect 4" />
                            <div className="caption">
                                <div className="caption-text">
                                    <span className="text-category">Caribbean Connect 4</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-piece mix identity" title="Memory Match">
                        <div className="portfolio-wrapper">
                            <img className="width-100" src={memoryMatch} alt="Memory Match" />
                            <div className="caption">
                                <div className="caption-text">
                                    <span className="text-category">Memory Match</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-piece mix identity" title="Date Nite">
                        <div className="portfolio-wrapper">
                            <img className="width-100" src={dateNite} alt="Date Nite" />
                            <div className="caption">
                                <div className="caption-text">
                                    <span className="text-category">Date Nite</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-piece mix identity" title="Star Trek Calculator">
                        <div className="portfolio-wrapper">
                            <img className="width-100" src={StarTrekCalculator} alt="Star Trek Calculator" />
                            <div className="caption">
                                <div className="caption-text">
                                    <span className="text-category">Enterprise Calculator</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>

        </div>
        );
    }
}

export default FrontEnd;