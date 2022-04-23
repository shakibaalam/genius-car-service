import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logoblack from '../../../images/logo-black.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={30} src={logoblack} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#experts">Experts</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user && <>
                                <Nav.Link as={Link} to='/add'>Add</Nav.Link>
                                <Nav.Link as={Link} to='/manage'>Manage</Nav.Link></>
                        }
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>

                        {user ?
                            <Nav.Link onClick={handleSignOut} eventKey={2} as={Link} to='/login'>
                                Logout
                            </Nav.Link>
                            : <Nav.Link eventKey={2} as={Link} to='/login'>
                                Login
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;