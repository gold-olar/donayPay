import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.jpg'
import { FormContext } from '../../contexts/FormContext';

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const { auth } = useState(FormContext)

    return (
        <div>
            <Navbar expand="md" color="faded" className="header animated slideInDown d-lg-flex justify-content-between align-items-center py-sm-3 py-2 px-sm-2 px-1" light>
                <NavbarBrand href="/" className="mr-auto"> <span> <img className="logo" src={logo} alt="logo" /> </span></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="ml-auto" >
                            <NavLink to='/' className="nav-link text-uppercase"> Home </NavLink>
                            <NavLink to='/campaigns' className="nav-link text-uppercase"> Campaigns</NavLink>
                            <NavLink to='/contact' className="nav-link text-uppercase">Contact Us </NavLink>
                            <NavLink to='/team' className="nav-link text-uppercase">The team </NavLink>

                        {!auth ?
                         
                                <NavLink to='/signup' className="reqe-button text-uppercase signup-btn">Sign Up </NavLink>
                              
                            :
                                <NavLink to='/' className="reqe-button text-uppercase login-btn">Log out </NavLink>

                        }
                        {
                            !auth ?
                                <NavLink to='/login' className="reqe-button text-uppercase login-btn">Log in </NavLink>
                            :
                            <div>

                            </div>


                        }

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
