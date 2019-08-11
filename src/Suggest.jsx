import React from 'react'
import {Container, Modal, Button, InputGroup, FormControl} from 'react-bootstrap'
import axios from 'axios';
 

class Suggest extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        description: "",
        url: "",
        isSubbmitEnabled: false
    };
    this.handleOnDescription = this.handleOnDescription.bind(this);
    this.handleOnUrl = this.handleOnUrl.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOnDescription(event) {
    this.setState({
        description: event.target.value,
        url: this.state.url,
        isSubbmitEnabled: this.verifyForm()
    });
  }

  handleOnUrl(event) {
    this.setState({
        description: this.state.description,
        url: "https://github.com/" + event.target.value,
        isSubbmitEnabled: this.verifyForm()
    });
  }

  verifyForm() {
      return true
  }

  handleClick() {
      var data = new FormData;
      data.append("entry.903783812", this.state.description);
      data.append("entry.660849746", this.state.url);
      axios
        .post("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/1/d/e/1FAIpQLSdnFIIIdld5KUGFvQxHWtDzP1y7DsP3qCcD-flYdtwpUGharQ/formResponse", data)
        .then(_ => alert('Success send!'));
      console.log(this.state);
  }

  render() {
    return (<Container>
        <Modal.Header closeButton="closeButton">
            <Modal.Title id="contained-modal-title-vcenter">
                <h1>Suggest an SRML</h1><p>Got an SRML that you think we should include? Let us know!</p>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label htmlFor="decription">Description</label>               
            <InputGroup className="mb-3">
                <FormControl
                        placeholder="Enter a short description of this srml."
                        aria-label="description"
                        aria-describedby="basic-addon2"
                        onChange={e => this.handleOnDescription(e)}
                        />
            </InputGroup>

            <label htmlFor="link">Link *</label>
            <InputGroup class="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">https://github.com/</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3" onChange={e => this.handleOnUrl(e)} />
            </InputGroup>
            <p />
            <div align="center">
                <Button variant="secondary" size="lg" onClick={this.verifyForm ? this.handleClick : null} disabled={!this.state.isSubbmitEnabled}>
                    Submit
                </Button>
            </div>
        </Modal.Body>
    </Container>);
  }
}

export default Suggest;
