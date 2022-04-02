import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './Images/Logo.svg'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="140"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link active className='fs-5' as={Link} to="/">Home</Nav.Link>
                    <Nav.Link active className='fs-5' as={Link} to="/product">Product</Nav.Link>
                    <Nav.Link active className='fs-5' as={Link} to="/order">Order</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;