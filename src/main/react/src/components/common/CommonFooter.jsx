// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Github, Facebook, Instagram, CCircle } from 'react-bootstrap-icons'
import itineraLogoInverted from '../../assets/images/itinera-logo-inverted.jpg'
import "./CommonFooter.css";

function CommonFooter() {
    return (
    <>
        <footer className="common-footer">
            <nav>
                <div className="common-footer-top">
                    <img src={itineraLogoInverted} alt="itinera logo" />
                    <div className='common-footer-social-icons'>
                        <a href="#"><Linkedin color="#fff" size={32}/></a>
                        <a href="#"><Github color="#fff" size={32}/></a>
                        <a href="#"><Facebook color="#fff" size={32}/></a>
                        <a href="#"><Instagram color="#fff" size={32}/></a>
                    </div>
                </div>
                <div className="common-footer-bottom">
                    <div className="common-footer-bottom-links">
                        <div className="common-footer-bottom-col">
                            <h3>how to reach us</h3>
                            <ul>
                                <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="common-footer-bottom-col">
                            <h3>trips</h3>
                            <ul>
                                <li><Link to="/explore">All trips</Link></li>
                                <li><Link to="/explore">Trips to Greece</Link></li>
                                <li><Link to="/explore">Trips to France</Link></li>
                                <li><Link to="/explore">Trips to Italy</Link></li>
                                <li><Link to="/explore">Trips to England</Link></li>
                            </ul>
                        </div>
                        <div className="common-footer-bottom-col">
                            <h3>about</h3>
                            <ul>
                                <li><Link to="/explore">What we do</Link></li>
                            </ul>
                        </div>
                        <div className="common-footer-bottom-col">
                            <h3>resources</h3>
                            <ul>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/reviews">Reviews</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <p className="common-footer-copyright"><CCircle size={12}/>&nbsp;{new Date().getFullYear()} Nebula-Tech Launch Code</p>
                </div>
            </nav>
        </footer>
    </>
  );
}

export default CommonFooter;
