import React from 'react';

export default props => {
    return (
        <div>
            <section id="contact" className="page-section form-container" >
                <div className="container">
                    <div className="text-center">
                        <h2>Contact Me</h2>
                        <p>Thanks for being here! -Matt</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-8 mx-auto">
                            {/*<form name="sentMessage" id="contactForm" novalidate="">*/}
                                <div className="row control-group">
                                    <div className="form-group col-12 floating-label-form-group controls">
                                        <label>Name</label>
                                        {/*<input type="text" className="form-control" placeholder="Name" id="name" required="" data-validation-required-message="Please enter your name.">*/}
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="row control-group">
                                    <div className="form-group col-12 floating-label-form-group controls">
                                        <label>Email Address</label>
                                        {/*<input type="email" className="form-control" placeholder="Email Address" id="email" required="" data-validation-required-message="Please enter your email address.">*/}
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="row control-group">
                                    <div className="form-group col-12 floating-label-form-group controls">
                                        <label>Phone Number</label>
                                        {/*<input type="tel" className="form-control" placeholder="Phone Number" id="phone" required="" data-validation-required-message="Please enter your phone number.">*/}
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="row control-group">
                                    <div className="form-group col-12 floating-label-form-group controls">
                                        <label>Message</label>
                                        <textarea rows="5" className="form-control" placeholder="Message" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br/>
                                    <div id="success"></div>
                                    <div className="row">
                                        <div className="form-group col-12">
                                            {/*<button type="submit" className="btn btn-secondary" style="background-color: #2196f3; border-color: #2196f3; ">Send</button>*/}
                                        </div>
                                    </div>
                            {/*</form>*/}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
    }