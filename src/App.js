import React from 'react';
import logo from './logo.svg';
import {
  Card,
  Col,
  Row,
  CardDeck,
  Container,
  Modal,
  Button
} from 'react-bootstrap'
import './App.css';

function Readme() {
  return (<p>readme here</p>)
}

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

  renderModelPage(model) {
    return (<div>
      <Modal.Header closeButton="closeButton">
        <Modal.Title id="contained-modal-title-vcenter">
          {model.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        readme here
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </div>);
  }

  OneCard(props) {
    return (<div className="rounded border p-2" style={{
        marginBottom: '30px',
        cursor: 'pointer'
      }} onClick={this.openModal.bind(this, props.model)}>
      <div className="m-1">
        <h2>{props.model.name}</h2>
      </div>
      <iframe src={"https://ghbtns.com/github-btn.html?user=" + props.model.user + "&repo=" + props.model.repo + "&type=star&count=true"} frameborder="0" scrolling="0" width="110px" height="20px"></iframe>
      <hr/>
      <div className="m-1">
        {props.model.descripstion}
      </div>
    </div>);
  }

  render() {
    var cards = [];
    for (var m of models) {
      cards.push(<Col xs={6} lg={4} xl={3} className="d-flex align-items-stretch">{this.OneCard({model: m})}</Col>);
    }
    return (<div className="App">
      <Container fluid={false}>
        <Row style={rowEqHeight}>
          {cards}
        </Row>
      </Container>
      <Modal show={this.state.modalIsOpen} onHide={this.closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered="centered">
        {this.renderModelPage(this.state.model)}
      </Modal>
    </div>);
  }
}
const rowEqHeight = {
  display: "flex",
  flexFlow: "row wrap"
}

export default App;
