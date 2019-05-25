import React from 'react';
import './GitHubButton.css';
import models from './models.js';
import PropTypes from 'prop-types';

class GitHubButton extends React.Component {
  static propTypes={
    user: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state={
      user:this.props.user,
      repo:this.props.repo,
      count:"",
    }
  }

  componentWillMount(){
    fetch(("https://api.github.com/repos/" + this.props.user + "/" + this.props.repo))
      .then((data)=>data.json())
      .then((obj)=>obj.stargazers_count)
      .then((count)=>{this.setState({count:count})})
      .catch(()=>{
        this.setState({count:"error"})
      }
    )
  }

  render() {
    return (<div class="github-btn github-stargazers" id="github-btn">
      <a class="gh-btn" href={"https://github.com/"+this.state.user+"/"+this.state.repo+"/"} id="gh-btn" target="_blank" aria-label="">
        <span class="gh-ico" aria-hidden="true"></span>
        <span class="gh-text" id="gh-text">Star</span>
      </a>
      <a class="gh-count" href={"https://github.com/"+this.state.user+"/"+this.state.repo+"/stargazers"} id="gh-count" target="_blank" aria-label="18">{this.state.count}</a>
    </div >);
  }
}

export default GitHubButton;
