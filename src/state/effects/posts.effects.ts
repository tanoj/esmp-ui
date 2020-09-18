import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import * as postActions from '../actions/posts.actions';

function getPosts() {
  return axios({
    method: 'get',
    // url: 'https://jsonplaceholder.typicode.com/users/1/posts',
    url: 'http://localhost:3001/api/posts',
  });
}

export function* getPostsSaga() {
  let payload;
  try {
    const response = yield call(getPosts);
    payload = response.data;

    yield put(postActions.createPostsSuccess(payload));

  } catch(error) {

    payload = error;
    yield put(postActions.createPostsError(payload));

  }
}