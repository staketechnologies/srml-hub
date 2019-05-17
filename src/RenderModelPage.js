import React from 'react'
import ReactDOM from 'react-dom'
import remark from 'remark'
import remarkReact from 'remark-react'
import Highlight from 'react-highlight'
import {Col, Row, Container, Modal, Button} from 'react-bootstrap'

class RenderModelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.model,
      readmetext: "",
      text:""
    }
    this.onChange=this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ text: e.target.value })
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
        <div id="preview">
          <div>{
            remark()
              .use(remarkReact,{
                sanitize:false,
                remarkReactComponents: {
                  code: Highlight
                },})
              .processSync(this.state.readmetext).contents
          }</div>
        </div>
        {/*remark()
          .use(remark2react,
            {sanitize: false,})
          .processSync(this.state.readmetext).contents*/}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Container>);
  }
}

export default RenderModelPage;
