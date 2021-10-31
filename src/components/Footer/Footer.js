import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div>
            <div className="row footer-container">

                <Row>
                    <div className="col-md-4">

                        <h3 className="text-white">Quick Links</h3>
                        <div className="quick-links">
                            <Link to="/home">Home</Link>
                            <Link to="/packages">Tour Packages</Link>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/login">Login/Register</Link>
                        </div>

                    </div>
                    <div className="col-md-4">

                        <h3 className="text-white">About Us</h3>
                        <div className="quick-links">
                            <Link to="/about">Why Us?</Link>
                            <Link to="/reviews">Reviews</Link>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <h3 className="text-white">Terms and Conditions</h3>
                        <div className="quick-links">
                            <Link to="/paymentMethod">Payment Method</Link>
                            <Link to="/policy">Booking and Cancellation Policy</Link>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-6">

                        <h2>Contact Us</h2>
                        <p>Dhaka Office: 82/4 (Gr. Floor), New DOHS, Mirpur, Dhaka-1210</p>
                        <p>Phone: npm i --save @fortawesome/fontawesome-svg-core+880170000111, +880 181 1114 5555</p>
                        <p> E-mail: info@tourmates-bd.com, tourmates-bd@gmail.com</p>

                    </div>

                    <div className="col-md-6">

                        <div>
                            <h3 className="">FOLLOW US</h3>
                            <Link><FontAwesomeIcon icon="faFacebookF" /></Link>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </div>




                    </div>
                </Row>

            </div>

        </div>
    );
};

export default Footer;