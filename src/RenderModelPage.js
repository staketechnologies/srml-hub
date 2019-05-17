import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "./CodeBlock";
import {Col, Row, Container, Modal, Button} from 'react-bootstrap'

class RenderModelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.model,
      readmetext: ""
    }
  }
  componentDidMount() {
    var myUrl = ("https://raw.githubusercontent.com/" + this.state.model.user + "/" + this.state.model.repo + "/master/README.md");
    fetch(myUrl, {mode: 'cors'}).then(response => response.text()).then(mytext => this.setState({readmetext: mytext})).catch(() => {
      console.log("fetch error")
    });
  }

  render() {
    return (<Container>
      <Modal.Header closeButton="closeButton">
        <Modal.Title id="contained-modal-title-vcenter">
          {this.state.model.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReactMarkdown
          source={this.state.readmetext}
          renderers={{
            code: CodeBlock
          }}
          escapeHtml={false}/>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Container>);
  }
}

export default RenderModelPage;
