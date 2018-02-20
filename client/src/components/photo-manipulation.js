import React, {Component} from 'react';

import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import PhotoManipulation from './photo-manipulation';
import ThreeDModeling from './modeling';
import Footer from './footer';

import photoManipulationPhotoshop from '../assets/img/photo-manipulation-photoshop.jpg';

import MaterialIcon from 'react-google-material-icons'

class PhotoManip extends Component {    
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

                    <h2 className="thick-bold-raleway">Photo Manipulation with Photoshop</h2>
                    <Link to="/front-end-dev">
                        <div className="portfolio-chevron-left" ><MaterialIcon icon="chevron_left" size={70}/></div>
                    </Link>
                    <Link to="/digital-art">
                        <div className="portfolio-chevron-right" ><MaterialIcon icon="chevron_right" size={70}/></div>
                    </Link>

                    <div className="portfolio-piece mix identity" title="Photo Manipulation with Photoshop">
                        <div className="portfolio-wrapper">
                            <a href="https://youtu.be/rjCspcflgOU">
                            <img className="width-100" src={photoManipulationPhotoshop} alt="Photo Manipulation with Photoshop" />
                            <div className="caption">
                                <div className="caption-text">
                                    <span className="text-category">Photo Manipulation with Photoshop</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>

        </div>
        );
    }
}

export default PhotoManip;