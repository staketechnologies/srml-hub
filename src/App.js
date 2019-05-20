import React from 'react';
import logo from './logo.svg';
import {
  Collapse,
  Col,
  Row,
  Container,
  Modal,
  Button,
  Jumbotron
} from 'react-bootstrap'
import './App.css';
import RenderModelPage from './RenderModelPage.js'
import SearchForm from './SearchForm.jsx'
import models from './models.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards:[],
      model: {},
      searchtext: "",
      modalIsOpen: false
    }
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChangeForm=this.onChangeForm.bind(this);
  }

  makeCards(searchtext) {
    console.log("filter "+searchtext);
    var nextcards = models.map((m) => {
      var lowerName=m.name.toLowerCase();
      var isDisplay = (lowerName.indexOf(searchtext) > -1);
      if(isDisplay){return (<Col key={m.name} sm={6} lg={4} xl={3} className={"d-flex align-items-stretch "+ (isDisplay?"":"d-none")}>
          {this.OneCard({model: m})}
        </Col>);}else{return false;}
      }
    );
    return nextcards;
  }

  onChangeForm(event){
    var target=event.target;
    var value=target.value;
    console.log("onchange to "+value);
    var cards=this.makeCards(value.toLowerCase());
    this.setState({searchtext:value,cards});
  }
  openModal(model) {
    this.setState({model: model, modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  afterOpenModal() {}

  componentWillMount() {
    var cards=this.makeCards(this.state.searchtext);
    this.setState({cards:cards});
  }
  OneCard(props) {
    return (<a className="rounded p-2 fly card" onClick={this.openModal.bind(this, props.model)} style={{
        background: "#EEE"
      }}>
      <div className="m-1">
        <h2>{props.model.name}</h2>
      </div>
      <div className="text-center">
        <iframe src={"https://ghbtns.com/github-btn.html?user=" + props.model.user + "&repo=" + props.model.repo + "&type=star&count=true"} frameBorder="0" scrolling="0" width="100px" height="20px"></iframe>
      </div>
      <hr/>
      <div className="m-1">
        {props.model.descripstion}
      </div>
    </a>);
  }

  render() {
    console.log("render start");
    return (<div className="App">
      <Container fluid={false}>
        <Jumbotron style={{
            color: "white",
            background: "#243"
          }}>
          <h1>Substrate Hub</h1>
        </Jumbotron>
        <SearchForm value={this.state.searchtext} onChange={this.onChangeForm.bind(this)}/>
        <Row>
          {this.state.cards}
        </Row>
        <Modal show={this.state.modalIsOpen} onHide={this.closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered="centered">
          <RenderModelPage model={this.state.model}/>
        </Modal>
      </Container>
    </div>);
  }
}

export default App;
