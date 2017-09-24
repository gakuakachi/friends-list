/*
 *
 * Main
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import makeSelectMain from './selectors';
import Counter from 'components/Counter';
import createHistory from 'history/createBrowserHistory';
import * as Actions from './actions';

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
    console.log('state' + this.props.isFetching);
  }

  handleClick(e) {
    e.preventDefault;
  }
  render() {
    let { isFetching, friends, error } = this.props;
    if(friends) {
      alert('ok');
      let items = friends.map((value, key)=> {
        return <p key={key}>{value.name}<span>{val.username}</span></p>
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
          { friends && <div>{ items }</div>}
        </Container>
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
  const { isFetching, friends, error } = state;
  // const { locale } = state.language;
  return {
    isFetching,
    friends,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFriendsStart: friends => {
      dispatch(Actions.fetchFriendsStart(friends))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps
)(Main);
