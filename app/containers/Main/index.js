/*
 *
 * Main
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import makeSelectMain from './selectors';
import createHistory from 'history/createBrowserHistory';
import * as Actions from './actions';
import { selectFriendDomain } from './selectors';

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid pink;
  height: 50px;
  padding: 10px;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
`;

const history = createHistory()

export class Main extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    e.preventDefault;
    const { fetchFriendsStart } = this.props
    const { isFetching, friends, error } = this.props;
    let param = e.target.value;
    history.push({
      pathname: '/',
      search: `?q=${param}`
    })
    fetchFriendsStart(param)
  }

  handleClick(e) {
    e.preventDefault;
  }

  checkState() {
    console.log(this.props.friends);
    console.log(this.props.isFetching);
    console.log(this.props.error);
  }

  render() {
    let { isFetching, friends, error } = this.props;
    let itemIsPresent = false;
    let items
    console.log('this is showing friends' + JSON.stringify
      (friends) + friends.length + friends);
    if(friends.length > 0) {
      itemIsPresent = true;
      items = friends.map((val, key)=> {
        return <p key={key}>{val.name}<span>{val.username}</span></p>
      })
    }

    return (
      <Wrapper>
        <Container>
          <form>
            <StyledInput ref="search" onChange={ this.handleChange } placeholder={"Search You Friends..."}/>
          </form>
          <a href="#" onClick={this.handleClick.bind(this)}>test</a>
          { isFetching ? <p>Loading</p>: null}
          { error ? <p>{ error }</p> : null}
          { itemIsPresent ? items : null}
        </Container>
          <p onClick={this.checkState.bind(this)}>test</p>
      </Wrapper>
    );
  }
}

Main.propTypes = {
  isFetching: PropTypes.bool,
  friends: PropTypes.array,
  error: PropTypes.any
};

const mapStateToProps = state => {
  const friendsState = selectFriendDomain(state);
  return {
    friends: friendsState.friends,
    isFetching: friendsState.isFetching,
    error: friendsState.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFriendsStart: param => {
      dispatch(Actions.fetchFriendsStart(param))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps
)(Main);
