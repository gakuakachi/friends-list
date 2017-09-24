import { combineReducers } from 'redux'
import * as ActionType from './constants';
import { fromJS } from 'immutable';
/*
 *
 * Main reducer
 *
 */

const initialState = fromJS({
  isFetching: false,
  query: '',
  friends: [],
  error: ''
});

export default function friendsReducer( state = initialState, action) {
  switch (action.type) {
    case ActionType.FRIENDS_FETCH_START:
      return state.set('isFetching', false);
    case ActionType.FRIENDS_FETCH_SUCCESSED:
      return state.merge({
        isFetching: false,
        friends: action.friends
      });
    case ActionType.FRIENDS_FETCH_FAILED:
      return state.merge({
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}
