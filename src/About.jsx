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
                    background: '#123'
                }}>
                <h1>About</h1>
                </Jumbotron>
                <hr />
                    <p>SubstrateHub(SRMLHub) curates and provides a platform for Substrate blockchain developer to easily find SubstrateRuntimeModuleLibraies or SubsrateChains for a variety of platforms and uses. We regularly update the site and provide filtering functionality for users to find libraries that they need, either for educational purposes, imports your chains, or other uses.</p>
                    <p>Like us on follow us on <a href="https://twitter.com/staketech">Twitter</a>!</p>
                    <p>Do you have a suggestion for Substrate Library, or any comments about the site? Drop us an email at info[at]staked.co.jp!</p>
                    <p>SRMLHub was built with love in <a href = "https://stake.co.jp">StakeTechnologies</a>.</p>
            </Container>
        </div>);
      }
}

export default About;