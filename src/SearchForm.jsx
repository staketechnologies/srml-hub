import React from 'react';
import {
  Form,
  InputGroup,
  Col,
  Row,
  Container,
  Modal,
  Button,
  Jumbotron
} from 'react-bootstrap'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationFormikUsername">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><i class="far fa-eye"></i></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control placeholder="Search from here" aria-describedby="inputGroupPrepend"
              name="searchtext" value={this.props.value} onChange={this.props.onChange} isInvalid={false}/>
          </InputGroup>
        </Form.Group>
      </Form.Row>
    );
  }
}

export default SearchForm;
