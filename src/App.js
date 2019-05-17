import React from 'react';
import logo from './logo.svg';
import {Col, Row, Container, Modal, Button} from 'react-bootstrap'
import './App.css';
import RenderModelPage from './RenderModelPage.js'
import models from './models.js'

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
        <Modal show={this.state.modalIsOpen} onHide={this.closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered="centered">
          <RenderModelPage model={this.state.model}/>
        </Modal>
      </Container>
    </div>);
  }
}

const rowEqHeight = {
  display: "flex",
  flexFlow: "row wrap"
}

export default App;
