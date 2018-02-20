import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav';
import ArtileConent from './article_content';

const routes = [
    {
        name: 'Article 1',
        to: '/articles/1'
    },
    {
        name: 'Article 2',
        to: '/articles/2'
    },
    {
        name: 'Article 3',
        to: '/articles/3'
    },

    {
        name: 'Article 4',
        to: '/articles/4'
    },

]

export default props => {
    return (
        <div>
            <Nav routes={routes}/>
            <h1>Here are some articles</h1>
            <p>Commodo eiusmod ullamco sint deserunt sunt velit. Sunt consequat eu Lorem sit veniam laborum commodo reprehenderit excepteur et nisi ea ea nostrud. In quis magna veniam incididunt labore non eu officia eiusmod. Sint nostrud incididunt sint laborum. Anim ipsum excepteur nulla est velit duis ullamco nulla non ut ex.</p>
            <Route path={`${props.match.path}`} component={ArtileConent}></Route>
        </div>        
    );
}