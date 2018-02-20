import React from 'react';
import ReactDOM from 'react-dom';

import {Route, Link} from 'react-router-dom';

import App from './components/app';

import DigitalArt from './components/digital-art';
import FrontEndDev from './components/front-end-dev';
import PhotoManipulation from './components/photo-manipulation';
import Modeling from './components/modeling';

import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/digital-art" component={DigitalArt}/>
            <Route path="/front-end-dev" component={FrontEndDev}/>
            <Route path="/photo-manipulation-photoshop" component={PhotoManipulation}/>
            <Route path="/modeling" component={Modeling}/>
        </div>
    </Router>,    
    document.getElementById('root')
);