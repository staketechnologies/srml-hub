import React from 'react';
import {Col, Row, Container, Modal, Button} from 'react-bootstrap'

class RenderModelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.model,
    }
  }

  readme(props) {
    var apiUrl = ("https://api.github.com/repos/" + props.model.user + "/" + props.model.repo + "/readme");
    var myUrl = ("https://github.com/" + props.model.user + "/" + props.model.repo + "/blob/master/README.md");

    let result = "";
    var myHeaders = new Headers();
    var apiHeaders = new Headers();
    myHeaders.append("Origin", "https://substrate-hub.herokuapp.com");
    apiHeaders.append("Accept", "application/vnd.github.VERSION.html");


    fetch(myUrl, {mode:'cors',headers: myHeaders}).then(response => response.text()).then(mytext => {
      console.log(myUrl);
      document.getElementById("result").innerHTML = mytext;
    }).catch(() => {
      console.log("fetch error")
    });
    return result;
  }
  render() {
    console.log("render");
    this.readme({model: this.state.model})
    return (<div>
      <Modal.Header closeButton="closeButton">
        <Modal.Title id="contained-modal-title-vcenter">
          {this.state.model.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="result"></div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </div>);
  }
}

export default RenderModelPage;
