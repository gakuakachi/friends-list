/**
*
* GitHub
*
*/

import React from 'react';
import 'whatwg-fetch';

// import styled from 'styled-components';
const urlForUsername = username =>
  `https://api.github.com/users/${username}`;


class GitHub extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      requestFaild: false,
      githubData: null
    }
  }

  componentDidMount() {
    fetch(urlForUsername(this.props.username))
      .then(response => {
        if(!response.ok) {
          throw Error("NetWork request failed")
        }
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          githubData: d
        })
      }, (err)=> {
        this.setState({
          requestFaild: !requestFaild
        })
      })
  }
  render() {

    if(!this.state.githubData) {
      return <p>fetch failed</p>
    }
    if(!this.state.requestFaild) {
      return <p>Request Failed</p>
    }
    return (
      <div>
        <p>{this.state.githubData}</p>
      </div>
    );
  }
}

GitHub.propTypes = {

};

export default GitHub;
