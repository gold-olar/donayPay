import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../Navbar/logo.jpg'
import { FormContext } from '../../contexts/FormContext';

const DashboardNav = () => {
    const {logOut} = useContext(FormContext);
    
    return ( 
        <div>
            <div className="container-fluid">
                <div className="header animated slideInDown d-lg-flex justify-content-between align-items-center py-sm-3 py-2 px-sm-2 px-1">
                    <div id="logo">
                        <span><a href="/"> <img  className="logo" src = {logo} alt="logo" /> </a></span>
                    </div>
                    <div className="nav_w3ls ml-lg-5">
                        <nav>
                            <label  className="toggle">
                                <span></span>
                                <span> </span>
                                <span></span>
                            </label>
                            <input type="checkbox" id="drop" />
                            <ul className="menu">
                                <li><NavLink to='/' className="nav-link text-uppercase">Home </NavLink></li>
                                <li><NavLink to='/' className="nav-link text-uppercase"> Profile</NavLink></li>
                                <li><NavLink to='/' onClick={logOut} className="nav-link text-uppercase">Log Out </NavLink></li>


                              
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DashboardNav;