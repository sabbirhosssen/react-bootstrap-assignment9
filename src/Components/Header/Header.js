import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container className="gap-5 p-2">

                <Navbar.Brand href="#home">
                    <img
                        src="https://w7.pngwing.com/pngs/465/305/png-transparent-my-liberty-preschool-mksr-english-learning-school-english-class-logo.png"
                        width="50"
                        height="35"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>


                <Navbar.Brand >Our Programing School</Navbar.Brand>
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Nav className="me-auto gap-5 ">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/services">Service</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;