import React from 'react';
import logo from './logo.svg';
import {Card, Col, Row, Container} from 'react-bootstrap'
import Modal from 'react-modal'
import './App.css';



function Readme(){
  return(
    {__html : "<p>readme here</p>"
    })
}

function OneCard() {
  return (<Card  elementType = <a/> style = {{marginBottom: '30px'}}>
    <Card.Body>
      <Card.Title><h1>Plasm</h1></Card.Title>
      <iframe  src="http://ghbtns.com/github-btn.html?user=stakedtechnologies&repo=Plasm&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
      <span></span>
      <hr/>
      <Card.Text>
      description here
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>);
}

Modal.setAppElement('#root')

function App() {
  var cards = [];
  for (var i = 0; i < 100; i++) {
    cards.push(<Col sm={6} md = {4} lg = {3}><OneCard/></Col>);
  }
  return (<div className="App">
    <Container fluid={true}>
      <Row className ="row-eq-height">
        {cards}
      </Row>
    </Container>
  </div>);
}

const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  };


export default App;
