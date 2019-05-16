import React from 'react';
import logo from './logo.svg';
import {Col, Row, Container, Modal, Button} from 'react-bootstrap'
import './App.css';
import RenderModelPage from './RenderModelPage.js'

var models = [
  {
    name: "Plasm",
    user: "stakedtechnologies",
    repo: "Plasm",
    descripstion: "Allows to add Plasma functions to their Substrate chain easily and seamlessly. Developers can also make both plasma parent chains and plasma child chains with Substrate."
  }, {
    name: "Substrate POA",
    user: "gautamdhameja",
    repo: "substrate-poa",
    descripstion: "Allows addition of new validators in a pure PoA(Proof of Authority) fashion. No tokens or stake needed, just the authorities have to agree."
  },
  {
    name: "Zerochain",
    user: "LayerXcom",
    repo: "zero-chain",
    descripstion: "Zerochain is a privacy-preserving blockchain on substrate. It is designed to get efficient zero-knowledge proving, reduce the on-chain storage cost and bring the flexibility for developing applications."
  },
  {
    name: "Robonomics on Substrate",
    user: "airalab",
    repo: "substrate-node-robonomics",
    descripstion: "AIRA (Autonomous Intelligent Robot Agent) project implements the standard of economic interaction between human-robot and robot-robot via liability smart contract. "
  },
  {
    name: "adex-protocol-substrate",
    user: "AdExNetwork",
    repo: "adex-protocol-substrate",
    descripstion: "The AdEx Protocol implemented on top of Substrate. Bootstrapped from substrate-node-template."
  },
  {
    name: "edgeware-node",
    user: "hicommonwealth",
    repo: "edgeware-node",
    descripstion: "A Parity Substrate node implementing Edgeware."
  },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {},
      modalIsOpen: false
    }
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(model) {
    this.setState({model: model, modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  afterOpenModal() {}

  OneCard(props) {
    return (<a className="rounded p-2 fly card" onClick={this.openModal.bind(this, props.model)}>
      <div className="m-1">
        <h2>{props.model.name}</h2>
      </div>
      <div className="text-center">
        <iframe src={"https://ghbtns.com/github-btn.html?user=" + props.model.user + "&repo=" + props.model.repo + "&type=star&count=true"} frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
      </div>
      <hr/>
      <div className="m-1">
        {props.model.descripstion}
      </div>
    </a>);
  }

  render() {
    var cards = [];
    for (var m of models) {
      cards.push(<Col sm={6} lg={4} xl={3} className="d-flex align-items-stretch">{this.OneCard({model: m})}</Col>);
    }
    return (<div className="App">
      <Container fluid={false}>
        <Row style={rowEqHeight}>
          {cards}
        </Row>
      </Container>
      <Modal show={this.state.modalIsOpen} onHide={this.closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered="centered">
        <RenderModelPage model={this.state.model} />
      </Modal>
    </div>);
  }
}

const rowEqHeight = {
  display: "flex",
  flexFlow: "row wrap"
}

export default App;
