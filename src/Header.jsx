import React from 'react';

import {
    Col,
    Form,
    InputGroup,
    Navbar,
    Nav,
    FormControl,
    Button
  } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">SRMLHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#">Suggest a SRML</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="https://stake.co.jp">Stake Technologies</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>);
    }
}

export default Header;