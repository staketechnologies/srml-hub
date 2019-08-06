import React from 'react';

import {
    Navbar,
    Nav,
    Modal,
    Container
  } from 'react-bootstrap';

  import Suggest from './Suggest';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        }
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    afterOpenModal() {}

    render() {
        return (<Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">SRMLHub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={this.openModal.bind(this)}>Suggest a SRML</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://stake.co.jp">Stake Technologies</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Modal show={this.state.modalIsOpen} onHide={this.closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered="centered">
                <Suggest />
            </Modal>
        </Navbar>);
    }
}

export default Header;