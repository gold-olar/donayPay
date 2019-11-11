import React from 'react';
import './Header.css'
import header_img from  './header.svg';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (  
        <section className="header-body ">
            <div className= "container-fluid">
                <div className="row">
                    <div className = "col header_col animated fadeInLeft">
                        <h2 className="header-desc">
                            Raising funds for people and causes that truly matter.
                            <br/>
                            <span className="get_started_span"> Get Started Today.</span> <br/>
                            <NavLink to="/signup" className="reqe-button text-uppercase ">Open Donaypay</NavLink>

                        </h2>



                    </div>
                    <div className = "col ">
                        <img className= "image_header" src={header_img}  alt=""/>
                    </div>
                </div>

            </div>
        </section>
    );
}
 
export default Header;