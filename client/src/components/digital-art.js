
import React, { Component } from 'react';

import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import PhotoManipulation from './photo-manipulation';
import ThreeDModeling from './modeling';
import Footer from './footer';

import Project1 from '../assets/img/project1.jpg';
import Project2 from '../assets/img/project2.jpg';
import Project3 from '../assets/img/project3.jpg';
import Project4 from '../assets/img/project4.jpg';
import Project5 from '../assets/img/project5.jpg';
import Project6 from '../assets/img/project6.jpg';
import Project7 from '../assets/img/project7.jpg';
import Project8 from '../assets/img/project8.jpg';
import Project9 from '../assets/img/project9.jpg';

import MaterialIcon from 'react-google-material-icons'


class digitalArt extends Component {
    // js to scroll to top of screen on mount
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

                 <h2 className="thick-bold-raleway">Digital Painting with Photoshop</h2>
                 <Link to="/photo-manipulation-photoshop">
                    <div className="portfolio-chevron-left" ><MaterialIcon icon="chevron_left" size={70}/></div>  
                 </Link>
                 <Link to="/modeling">
                    <div className="portfolio-chevron-right" > <MaterialIcon icon="chevron_right" size={70}/></div>       
                 </Link>

                 <div className="portfolio-piece mix identity" title="Deep Dungeon">
                     <div className="portfolio-wrapper">
                         <img className="width-100" src={Project1} alt="Deep Dungeon" />
                             <div className="caption">
                                 <div className="caption-text">
                                     <span className="text-category">Deep Dungeon</span>
                                 </div>
                                 <div className="caption-bg"></div>
                             </div>
                     </div>
                 </div>

                 <div className="portfolio-piece mix identity" title="Captain's Quarters">
                     <div className="portfolio-wrapper">
                         <img className="width-100" src={Project2} alt="Captain's Quarters" />
                             <div className="caption">
                                 <div className="caption-text">
                                     <span className="text-category">Captain's Quarters</span>
                                 </div>
                             <div className="caption-bg"></div>
                         </div>
                     </div>
                 </div>

                 <div className="portfolio-piece mix identity" title="Dragon Range">
                     <div className="portfolio-wrapper">
                         <img className="width-100" src={Project3} alt="Dragon Range" />
                         <div className="caption">
                             <div className="caption-text">
                                 <span className="text-category">Dragon Range</span>
                             </div>
                             <div className="caption-bg"></div>
                         </div>
                     </div>
                 </div>

                 <div className="portfolio-piece mix identity" title="Gold Horizon">
                     <div className="portfolio-wrapper">
                         <img className="width-100" src={Project4} alt="Gold Horizon" />
                         <div className="caption">
                             <div className="caption-text">
                                 <span className="text-category">Gold Horizon</span>
                             </div>
                             <div className="caption-bg"></div>
                         </div>
                     </div>
                 </div>

                 <div className="portfolio-piece mix identity" title="Last Bridge">
                     <div className="portfolio-wrapper">
                         <img className="width-100" src={Project5} alt="Last Bridge" />
                         <div className="caption">
                             <div className="caption-text">
                                 <span className="text-category">Last Bridge</span>
                             </div>
                             <div className="caption-bg"></div>
                         </div>
                     </div>
                 </div>

                 <div className="portfolio-piece mix identity" title="Guardians">
                     <div className="portfolio-wrapper">
                         <img className="width-100" src={Project6} alt="Guardians" />
                         <div className="caption">
                             <div className="caption-text">
                                 <span className="text-category">Guardians</span>
                             </div>
                             <div className="caption-bg"></div>
                         </div>
                     </div>
                 </div>

                 <div className="portfolio-piece mix identity" title="Sunset Journey">
                     <div className="portfolio-wrapper">
                         <img className="width-100" src={Project7} alt="Sunset Journey" />
                         <div className="caption">
                             <div className="caption-text">
                                 <span className="text-category">Sunset Journey</span>
                             </div>
                             <div className="caption-bg"></div>
                         </div>
                     </div>
                 </div>

                 <div className="portfolio-piece mix identity" title="Mist and Forest">
                     <div className="portfolio-wrapper">
                         <img className="width-100" src={Project8} alt="Mist and Forest" />
                         <div className="caption">
                             <div className="caption-text">
                                 <span className="text-category">Mist and Forest</span>
                             </div>
                             <div className="caption-bg"></div>
                         </div>
                     </div>
                 </div>

                 <div className="portfolio-piece mix identity" title="The Core">
                     <div className="portfolio-wrapper">
                         <img className="width-100" src={Project9} alt="The Core" />
                         <div className="caption">
                             <div className="caption-text">
                                 <span className="text-category">The Core</span>
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

export default digitalArt;