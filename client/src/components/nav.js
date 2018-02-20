import React from 'react';
import {Link} from 'react-router-dom';


export default props => {
    const routes = props.routes.map((route, index) => {
            return (
                <li key={index}>
                    <Link to={route.to}>{route.name}</Link>
                </li>
            )
    });


    return (
        <ul>
            {routes}
        </ul>
    )
}