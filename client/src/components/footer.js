import React from 'react';

export default props => {
    return (

        <footer className="footer">
            <div className="container text-center">
                <div className="col-lg-12">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="https://www.facebook.com/mnorkaitis">
                                <i className="fab fa-facebook-square icon"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/matthew-norkaitis-8a0a0831">
                                <i className="fab fa-linkedin-in icon"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://twitter.com/mattnorkaitis">
                                <i className="fab fa-twitter icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}