import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "./CodeBlock";
import {Container, Modal, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

class RenderModelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.model,
      readmetext: ""
    }
  }
  componentDidMount() {
    var myUrl
    var urlPrefix = ("https://raw.githubusercontent.com/" + this.state.model.user + "/" + this.state.model.repo);
    if (this.state.model.hasOwnProperty("readme")) {
      myUrl = this.state.model.readme;
    } else {
      myUrl = (urlPrefix + "/master/README.md");
    }
    fetch(myUrl, {mode: 'cors'})
      .then(response => response.text())
      .then(mytext => mytext.replace(/\.\/(.+\.(jpg|png|gif))/g, urlPrefix + "/master/$1"))
      .then(mytext => { console.log(mytext); this.setState({readmetext: mytext}); })
      .catch(() => {
      console.log("fetch error");
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
        console.log(this.state.readmetext);
        <ReactMarkdown source={this.state.readmetext} renderers={{
            code: CodeBlock
          }} escapeHtml={false}/>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Container>);
  }
}

RenderModelPage.propTypes = {
  model: PropTypes.object.isRequired,
};

export default RenderModelPage;
