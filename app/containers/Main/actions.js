/*
 *
 * Main actions
 *
 */
import fetch from 'isomorphic-fetch'
import { Api } from './service/api';
import * as ActionType from './constants';

export function fetchFriendsStart(param) {
  return {
    type: ActionType.FRIENDS_FETCH_START,
    param
  }
}


export const receiveFriends = friends => {
  return {
    type: ActionType.FRIENDS_FETCH_SUCCESSED,
    friends
  }
}

export const friendsFetchFailed = error => {
  return {
    type: ActionType.FRIENDS_FETCH_FAILED,
    error
  }
}
// export const fetchFriend = friend =>


// const fetchFriendsHitIfNeeded = (frineds, isFetching) => dispatch => {
//   if(isFetching) {
//     dispatch(fetchFriends(friends))
//   }else{
//     return friends
//   }
// }


