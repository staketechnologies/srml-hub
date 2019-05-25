import React from 'react';
import PropTypes from 'prop-types'
import {Col, Row, Container, Modal, Jumbotron} from 'react-bootstrap'
import './App.css';
import RenderModelPage from './RenderModelPage.js'
import SearchForm from './SearchForm.jsx'

import GitHubButton from './GitHubButton.jsx'

import models from './models.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [], //Array of Card Components
      model: {}, //model of modal page
      searchtext: "", //text set in search form
      modalIsOpen: false
    }
    this.state.cards = models.map((m) =>this.OneCard({model: m}));
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChangeForm = this.onChangeForm.bind(this);
  }

  //props:{searchtext,}
  ShowCards(props) {
    var searchtext = props.searchtext;
    var countValid = 0;
    // console.log("filter "+searchtext);
    var nextcards = this.state.cards.map((card, i) => {
      var m = models[i];
      var lowerName = m.name.toLowerCase();
      var isDisplay = (lowerName.indexOf(searchtext) > -1);
      if (isDisplay) {
        countValid += 1;
        return (<Col key={m.name} sm={6} lg={4} xl={3} className={"d-flex align-items-stretch "}>
          {card}
        </Col>);
      } else {
        return false;
      }
    });
    if (countValid > 0) {
      return nextcards;
    } else {
      return (<p>No models found.</p>)
    }
  }

  onChangeForm(event) {
    var target = event.target;
    var value = target.value;
    // console.log("onchange to "+value);
    this.setState({searchtext: value});
  }
  openModal(model) {
    this.setState({model: model, modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  afterOpenModal() {}

  //props:{model}
  OneCard(props) {
    console.log("local Onecard")
    var GHB = React.createElement(GitHubButton, {
      user: props.model.user,
      repo: props.model.repo
    });
    return (<div className="rounded p-2 fly card col-sm-12" onClick={this.openModal.bind(this, props.model)} style={{
        background: "#EEE"
      }}>
      <div className="m-1">
        <h2>{props.model.name}</h2>
      </div>
      <div className="mx-auto">
        {/* <GitHubButton user={props.model.user} repo={props.model.repo}/> */}
        {GHB}
      </div>
      <hr/>
      <div className="m-1">
        {props.model.descripstion}
      </div>
    </div>);
  }

  render() {
    // console.log("render start");
    var ShowCards = this.ShowCards.bind(this);
    return (<div className="App">
      <Container fluid={false} style={{
          paddingTop: '10px'
        }}>
        <Jumbotron style={{
            marginBottom: '10px',
            color: 'white',
            background: '#243'
          }}>
          <h1>Substrate Hub</h1>
        </Jumbotron>
        <SearchForm value={this.state.searchtext} onChange={this.onChangeForm.bind(this)}/>
        <Row style={{}}>
          <ShowCards searchtext={this.state.searchtext.toLowerCase()}/>
        </Row>
        <Modal show={this.state.modalIsOpen} onHide={this.closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered="centered">
          <RenderModelPage model={this.state.model}/>
        </Modal>
      </Container>
    </div>);
  }
}

class OneCard extends React.Component {
  static propTypes={
    model:PropTypes.object.isRequired,
    onClick:PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state={
      GHB:{},
      model: this.props.model,
      onClick: this.props.onClick
    }
    console.log("onecard constructor");
  }

  componentWillMount(){
    this.setState({GHB:React.createElement(GitHubButton, {
      user: this.state.model.user,
      repo: this.state.model.repo
    })});
  }

  render() {

    return (<div className="rounded p-2 fly card col-sm-12" onClick={this.state.onClick} style={{
        background: "#EEE"
      }}>
      <div className="m-1">
        <h2>{this.state.model.name}</h2>
      </div>
      <div className="mx-auto">
        {this.state.GHB}
      </div>
      <hr/>
      <div className="m-1">
        {this.state.model.descripstion}
      </div>
    </div>);
  }
}

export default App;
