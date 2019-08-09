import Header from './Header';
import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap'

class About extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (<div className="App">
            <Container fluid={false} style={{
                paddingTop: '10px'
                }}>
                <Jumbotron style={{
                    marginBottom: '10px',
                    color: 'white',
                    background: '#226'
                }}>
                <h1>About</h1>
                </Jumbotron>
                <hr />
                    <p align='left'> Substrate Runtime Module Library Hub (SRML Hub) is a curated platform for blockchain developers.</p>
                    <p align='left'> We hope this site is useful when you try to build applications on Substrate and Polkadot.</p>
                    <p align='left'> If you want to add your SRML, feel free to fill out the application form.</p>
            </Container>
        </div>);
      }
}

export default About;