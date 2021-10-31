import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    //Distructuring user and Logout from useAuth() function
    const { user, logOut } = useAuth();
    return (
        <>
            <div className="header-img">
                <Navbar className="navbar-style" expand="lg">
                    <Container fluid>

                        <h3 className="site-name">TourMates</h3>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Stack direction="horizontal" gap={3}>
                                    <NavLink className="nav-menu" to="/home">Home</NavLink>
                                    <NavLink className="nav-menu" to="/packages">Packages</NavLink>
                                    <NavLink className="nav-menu" to="/reviews">Reviews</NavLink>
                                    <NavLink className="nav-menu" to="/contact">Contact</NavLink>
                                    {user.email && <NavLink className="nav-menu" to="/addNewPackage">Add Package</NavLink>}
                                    {user.email && <NavLink className="nav-menu" to="/myOrders">My Orders</NavLink>}
                                    {user.email && <NavLink className="nav-menu" to="/manageAllOrders">Manage All Orders</NavLink>}
                                    {/* User Name and Log out button display here */}
                                    <div>
                                        {user?.email && <span className="user-name" style={{ color: 'white' }}>Hello {user.displayName} </span>}
                                        {
                                            user.email ?
                                                <button className="btn-info" onClick={logOut}>log out</button>
                                                :
                                                <NavLink className="nav-menu" to="/login">Login/Register</NavLink>}
                                    </div>

                                </Stack>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;