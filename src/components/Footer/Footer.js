import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer py-md-5 pt-md-3 pb-sm-5">
                <div className="container">
                    <div className="row p-sm-4 px-3 py-3">
                        <div className="col-lg-4 footer-top mt-md-0 mt-sm-5">
                            <h2>
                                <NavLink className="navbar-brand footer-brand" to="/"> DonayPay </NavLink>
                            </h2>
                            <div className="fv3-contact mt-2">
                                <p>
                                    <a href="mailto:info@donaypay.com">info@donaypay.com</a>
                                </p>
                            </div>
                            <div className="fv3-contact my-2">
                                <p>+234 706 8093 818</p> <br />
                                <p>+234 706 8093 818</p>
                            </div>
                            <div className="fv3-contact">
                                <p>Obafemi Awolowo University
							<br />Ile-Ife , Osun State, Nigeria</p>
                            </div>
                        </div>
                        <div className="col-lg-2  col-md-6 mt-lg-0 mt-4">
                            <div className="footerv2-w3ls">
                                <h3 className="mb-3 w3f_title">Navigation</h3>
                                <hr />
                                <ul className="list-w3pvtits">
                                    <li>
                                        <NavLink to="/"> Home</NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink to="/"> How it works </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink to="/"> Campaigns </NavLink>
                                    </li>
                                    <li className="mb-2">
                                        <NavLink to="/"> Blog </NavLink>
                                    </li>
                                    <li><NavLink to="/"> About Us </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2  col-md-6 mt-lg-0 mt-4">
                            <div className="footerv2-w3ls">
                                <h3 className="mb-3 w3f_title">Links</h3>
                                <hr />
                                <ul className="list-w3pvtits">
                                    <li>
                                        <NavLink to="/"> Explore </NavLink>

                                    </li>
                                    <li className="my-2">
                                        <NavLink to="/"> Our Mission </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink  to="/"> Values </NavLink>
                                    </li>
                                    <li className="mb-2">
                                    <NavLink  to="/"> Find Us </NavLink>
                                    </li>
                                    <li>
                                    <NavLink  to="/"> Privacy Policy </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-lg-0 mt-4">
                            <div className="footerv2-w3ls">
                                <h3 className="mb-3 w3f_title">Links</h3>
                                <hr />
                                <ul className="list-w3pvtits">
                                    <li>
                                    <NavLink  to="/"> More </NavLink>
                                    </li>
                                    <li className="my-2">
                                    <NavLink  to="/"> Our Work </NavLink>
                                    </li>
                                    <li className="my-2">
                                    <NavLink  to="/"> Explore </NavLink>
                                    </li>
                                    <li className="mb-2">
                                   <NavLink  to="/"> Contact Us </NavLink>
                                    </li>
                                    <li>
                                    <NavLink  to="/"> References </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2  col-md-6 mt-lg-0 mt-4">
                            <div className="footerv2-w3ls">
                                <h3 className="mb-3 w3f_title">Links</h3>
                                <hr />
                                <ul className="list-w3pvtits">
                                    <li className="my-2">
                                    <NavLink  to="/"> Explore </NavLink>
                                    </li>
                                    <li>
                                    <NavLink  to="/"> Our Mission </NavLink>
                                    </li>
                                    <li className="my-2">
                                    <NavLink  to="/"> Latest Posts </NavLink>
                                    </li>

                                    <li className="mb-2">
                                    <NavLink  to="/"> FInd Us </NavLink>
                                    </li>
                                    <li>
                                    <NavLink  to="/"> Terms  </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="cpy-right text-center bg-theme">
                <p className="text-wh">© {new Date().getFullYear()} DonayPay. All rights reserved
		</p>
            </div>
        </div>

    );
}

export default Footer;