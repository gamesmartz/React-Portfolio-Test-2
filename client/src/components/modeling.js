import React, { Component } from 'react';

import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import PhotoManipulation from './digital-art';
import ThreeDModeling from './front-end-dev';
import Footer from './footer';

import morenoWithMapData from '../assets/img/moreno-with-map-data.jpg';
import mayaMudbox from '../assets/img/maya-mudbox.jpg';
import carmelSeniorLiving from '../assets/img/carmel-senior-living.jpg';
import massing from '../assets/img/3d-massing.jpg';

import MaterialIcon from 'react-google-material-icons'

class Modeling extends Component {
        componentWillMount () {
            scroll(0, 0);
        }

    render ()  {
        
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

                    <h2 className="thick-bold-raleway">3D Modeling</h2>
                    <Link to="/digital-art">
                        <div className="portfolio-chevron-left" ><MaterialIcon icon="chevron_left" size={70}/></div>                 
                    </Link>
                    <Link to="/front-end-dev">
                        <div className="portfolio-chevron-right" ><MaterialIcon icon="chevron_right" size={70}/></div>
                    </Link>

                    <div className="portfolio-piece mix identity" title="Moreno Valley With MapData">
                        <div className="portfolio-wrapper">
                            <a href="https://youtu.be/3G9nQllk4gI">
                            <img className="width-100" src={morenoWithMapData} alt="Moreno Valley With MapData" />
                            <div className="caption">
                                <div className="caption-text">
                                    <span className="text-category">Moreno Valley With MapData</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio-piece mix identity" title="Character Creaction with Maya and Mudbox">
                        <div className="portfolio-wrapper">
                            <a href="https://youtu.be/JLvia4UXeHw">
                            <img className="width-100" src={mayaMudbox} alt="Character Creaction with Maya and Mudbox" />
                            <div className="caption">
                                <div className="caption-text">
                                    <span className="text-category">Character Creaction with Maya and Mudbox</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio-piece mix identity" title="Carmel Senior Living">
                        <div className="portfolio-wrapper">
                            <a href="https://youtu.be/i03dPmxP4Uo">
                                <img className="width-100" src={carmelSeniorLiving} alt="Carmel Senior Living" />
                                <div className="caption">
                                    <div className="caption-text">
                                        <span className="text-category">Carmel Senior Living</span>
                                    </div>
                                    <div className="caption-bg"></div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio-piece mix identity" title="Architectural Massing">
                        <div className="portfolio-wrapper">
                            <a href="https://youtu.be/0H_EhQu_7ng">
                                <img className="width-100" src={massing} alt="Architectural Massing" />
                                <div className="caption">
                                    <div className="caption-text">
                                        <span className="text-category">Architectural Massing</span>
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

export default Modeling;