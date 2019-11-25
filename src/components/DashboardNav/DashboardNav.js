import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Navbar/logo.jpg'
import { FormContext } from '../../contexts/FormContext';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, } from 'reactstrap';

const DashboardNav = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const { logOut } = useContext(FormContext);


    return (
        <div>
            <Navbar expand="md" color="faded" className="header animated slideInDown d-lg-flex justify-content-between align-items-center py-sm-3 py-2 px-sm-2 px-1" light>
                <NavbarBrand href="/" className="mr-auto"> <span> <img className="logo" src={logo} alt="logo" /> </span></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="ml-auto" >
                        <NavLink to='/' className="nav-link text-uppercase">Home </NavLink>
                        <NavLink to={`/profile`} className="nav-link text-uppercase"> Profile</NavLink>
                        <NavLink to='/' onClick={logOut} className="nav-link text-uppercase">Log Out </NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default DashboardNav;