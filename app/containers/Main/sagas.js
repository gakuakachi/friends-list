import { fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as Actions from './actions';
import * as ActionTypes from './constants';

import search from './service/api';

function* helloSaga() {
  console.log('Hello Sagas!');
}

function* fetchFriendsSaga(action) {
  try {
    // console.log("this is withing fetchFriendsSaga" + "   "+ action.param)
    const friends = yield call(search, action.param);
    yield put({type: ActionTypes.FRIENDS_FETCH_SUCCESSED, friends: friends });
  }catch(e) {
    yield put({type: ActionTypes.FRIENDS_FETCH_FAILED, error: e.message});
  }
}

function* fetchFriendsWatherSaga() {
  yield takeEvery(ActionTypes.FRIENDS_FETCH_START, fetchFriendsSaga);
}

function* rootSaga() {
  yield [
    fork(helloSaga),
    fork(fetchFriendsWatherSaga)
  ];
}

export default rootSaga

// export const fetchFriends = friends => dispatch => {
//   return fetch(`https://www.reddit.com/r/${friends}.json`)
//     .then(response => {
//         console.log(response)
//         return response.json()
//       }, error => {
//         console.log(error)
//         dispatch()
//       })
//     .then(json => dispatch(receiveFriends(json)))
// }
