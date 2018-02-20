import React from 'react';
import IndexContact from './index_contact';
import IndexTop from './index-top';
import Footer from './footer';

import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import artistPallet from '../assets/img/artist-pallet.png';
import threeDShape from '../assets/img/3d-shape.png';
import closingBraces from '../assets/img/closing-braces.png';
import photoAddSubtract from '../assets/img/photo-add-subtract.png';

export default props => {
    return (
        <div>
            <IndexTop/>

            <section id="portfolio" className="page-section bg-light" >
                <div className="container-fluid">

                    <div className="wow fadeIn text-center">
                        <h1 className="thick-bold-raleway">Portfolios</h1>
                    </div>
                    <div className="row text-center">

                        <div className="col-lg-3 col-md-6">
                            <Link to="/digital-art">
                                <div className="wow fadeIn px-4 pb-4 pb-lg-0 h-100">
                                    <img src={artistPallet}  alt="Artist Pallet" />
                                    <h3>Digital Art</h3>
                                    <p className="mb-0">Digital Painting with Photoshop</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <Link to="/modeling">
                                <div className="px-4 pb-4 pb-lg-0 h-100">
                                    <img src={threeDShape}  alt="3d Shape" />
                                    <h3>3d Modeling</h3>
                                    <p className="mb-0">3d modeling for architecture and entertainment.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <Link to="/front-end-dev">
                                <div className="px-4 pb-4 pb-lg-0 h-100">
                                    <img src={closingBraces}  alt="Closing Braces" />
                                    <h3>Front-End Development</h3>
                                    <p className="mb-0">Web creation with html/css/oop javascript.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <Link to="/photo-manipulation-photoshop">
                                <div className="wow fadeIn px-4 h-100">
                                    <img src={photoAddSubtract}  alt="Photoshop Logo" />
                                    <h3>Photo Manipulation</h3>
                                    <p className="mb-0">Adding/subtracting/modifying images with photoshop</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <IndexContact/>
            <Footer/>

        </div>
    );
}