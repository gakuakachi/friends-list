/*
 *
 * TodoContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTodoContainer from './selectors';

export class TodoContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

TodoContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  TodoContainer: makeSelectTodoContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
