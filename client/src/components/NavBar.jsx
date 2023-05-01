import React, {useContext, useState} from 'react';
import {Button, Modal, Nav, Navbar} from "react-bootstrap";
import logo from '../assets/logo.png'
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    BLOG_ROUTE,
    COMPANIES_ROUTE,
    HOME_ROUTE,
    PROFILE_ROUTE,
    SERVICES_ROUTE, SIGN_ROUTE,

} from "../utils/consts.js";
import {useNavigate} from "react-router-dom";
import Sign from "../pages/sign.jsx";
import Login from "../pages/login.jsx";


const NavBar = () => {
    //
    // const {user} = useContext(Context)
    const navigate = useNavigate()
    const isAuth = false


    return (
        <Navbar bg="dark" variant="dark" className='d-flex justify-content-sm-between'>
            <div className='justify-content-sm-between d-flex align-items-center me-auto ms-auto'>
                <Navbar.Brand href={HOME_ROUTE} style={{display: "flex"}}>
                    <img src={logo} height='25' alt=""/>
                </Navbar.Brand>
                <Nav style={{gap: window.innerWidth * 0.02}} className="align-items-center">
                    {/*<Nav.Link className='d-flex' href={ABOUT_ROUTE}>About</Nav.Link>*/}
                    <Nav.Link href={COMPANIES_ROUTE}>Companies</Nav.Link>
                    <Nav.Link href={SERVICES_ROUTE}>Services</Nav.Link>
                    <Nav.Link href={BLOG_ROUTE}>Blog</Nav.Link>

                    {isAuth ?
                        <Nav className='ms-4'>
                            <Button variant={"outline-light"} onClick={() => navigate(PROFILE_ROUTE)}>
                                PROFILE
                            </Button>
                        </Nav>
                        :

                        <Nav className='ms-4'>
                            <Login/>
                            <Sign/>
                        </Nav>
                    }
                </Nav></div>
        </Navbar>
    );
};

export default NavBar;