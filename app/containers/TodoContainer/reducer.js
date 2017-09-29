/*
 *
 * TodoContainer reducer
 *
 */

import { fromJS } from 'immutable';
import * as Actions from './constants';

const initialState = fromJS({
  todo: [],
  filterType: 'ALL',
});

//filterType ALL, DONE, WORKINPROGRESS

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return state.merge('todo');
    case Actions.TOGGLE_TODO:
      return state;
    case Actions.DELETE_TODO:
      return state;
    case Actions.FILTER_TODO:
      return state;
    default:
      return state;
  }
}

export default todoContainerReducer;
